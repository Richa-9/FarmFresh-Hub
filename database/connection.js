// Libraries
const mongoose = require("mongoose");
const db_url =
  "mongodb+srv://shreyashrivastava21:idMu0gNeEwqPqJ41@cluster0.kewikan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Database Connection
mongoose.connect(db_url, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully");
  }
});

//process.env.DB_URL