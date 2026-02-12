const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv").config();

const App = express(); 
const PORT = 3000;



App.listen(PORT, ()=> {
    console.log(`Server Running @PORT: ${PORT}`);
})
