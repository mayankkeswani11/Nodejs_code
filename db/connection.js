const mongoose = require("mongoose");

const url = "mongodb://Localhost:27017/students_registrations";

const connection = mongoose.connect(url);
connection
  .then(() => {
    console.log("mongo connection successful");
  })
  .catch(() => {
    console.log("no connection");
  });
