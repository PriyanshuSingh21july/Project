

// Import MongoClient from mongodb
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Priyanshu'; // Corrected database name

// Function to insert user data into the database
async function insertUser(userData) {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db('Priyanshu'); //  database name
        const collection = db.collection('StudentData'); //  collection name
        await collection.insertOne(userData);
        console.log("User data inserted successfully");
    } catch (error) {
        console.error("Error inserting user:", error);
        throw error; // error for handling in the calling function
    } finally {
        await client.close();
        console.log("Disconnected from MongoDB");
    }
}

module.exports = {
    insertUser: insertUser
};
