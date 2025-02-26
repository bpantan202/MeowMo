const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route files
const meow = require("./routes/Meow");

const app = express();

//Body parser
app.use(express.json());

app.use("/meow", meow);

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server running in`, process.env.NODE_ENV, ` mode on port `, PORT)
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.massage}`);
  //Close server & exit process
  server.close(() => process.exit(1));
});
