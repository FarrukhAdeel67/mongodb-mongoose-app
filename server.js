const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
const studentRouter = require('./routes/student');
app.use("/api/students", studentRouter);
//password is removed from connection
mongoose.connect("mongodb+srv://farrukhadeel:@cluster0.ysuiv.mongodb.net/test").then(result => {
    console.log("Database connected Successfully!");// this is for connection with database
}).catch(err => {
    console.log(err)

})

app.listen(4000);