const express = require("express");
const dotenv = require("dotenv");

//Route files
const meow = require('./routes/meow')

//Load env vars
dotenv.config({path:'./config/config.env'});

const app = express();

app.use('/meow',meow)

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running in`, process.env.NODE_ENV, ` mode on port `, PORT));