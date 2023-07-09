const express = require("express");  //import 
const app = express()                // initialize
const PORT = 5000;


// server initialize
app.listen(PORT,()=> console.log(`Server is running on localhost:${PORT}`))