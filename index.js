const express=require("express");
const app=express();
const path=require("path");

/*    Express js      */
// its biults  middleware static website
const staticPath=path.join(__dirname,'../public')
app.use(express.static(staticPath));




app.get("/about",(req,res)=>{
  res.send("Hello from about express")

  
})


app.get("/contact",(req,res)=>{
 res.send("<h1>Hello from contact  page</h1>")
            
   })

   
app.get("/home",(req,res)=>{
               res.send({
                              id:2,
                              Name:"Priyanshu",
                              Branch:"CSE",
                              Semester:"V",
                              Rolleno:"Node js Developer"

})
  });
   


app.listen(8080);
console.log("Server start");