const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const studentRouter = require('./routes/student');
app.use("/api/students", studentRouter);

mongoose.connect("mongodb+srv://farrukhadeel:17301pker@cluster0.ysuiv.mongodb.net/test").then(result => {
    console.log("Database connected Successfully!");
}).catch(err => {
    console.log(err)

})

app.listen(4000);