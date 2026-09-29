import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Student from "./students.js";

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/TipoDB")
    .then(() => {
        console.log("MongoDB Connected")
    }) 
    .catch(error => {
        console.log(error)
    })

app.get("/api/students", async (req,res)=>{

    const students = await Student.find();
    res.json(students)

})

app.listen(5174, () => {

    console.log("Server running on port 5174");

});