



// app.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbconn');  // Import your database connection module
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import insertUser function from dbconn module
const { insertUser } = require('./dbconn');


// Route to handle form submission
app.post("/sign_up", async (req, res) => {
    try {
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var age = req.body.age;
        var gender = req.body.gender;
        var course = req.body.course;
        var branch = req.body.branch;
        var semester = req.body.semester;
        var section = req.body.section;
        var rollNo = req.body.rollNo;
        var marks = req.body.marks;

        var data = {
            "firstName": firstName,
            "lastName": lastName,
            "age": age,
            "gender": gender,
            "course": course,
            "branch": branch,
            "semester": semester,
            "section": section,
            "rollNo": rollNo,
            "marks": marks
        };

        // Call insertUser function to insert data into the database
        await insertUser(data);

        res.status(200).json({ message: "Form submitted successfully", data: data });
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Route to serve index.html
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});











