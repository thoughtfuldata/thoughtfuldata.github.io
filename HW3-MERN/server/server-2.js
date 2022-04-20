// To connect with your mongoDB database
const mongoose = require('mongoose');

// CHANGE the username,password,link to be yours!
mongoose.connect('mongodb+srv://thoughtfuldata:K51GsiIOBEst@cluster0.t1iev.mongodb.net/', {
  dbName: 'USC',
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// schema for our table called 'users'
const USCSchema = new mongoose.Schema({
  coursename: {
    type: String,
    required: true,
    unique: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Course = mongoose.model('courses', USCSchema); // creates a 'users' table
//\\User.createIndexes();

// express middleware
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // go to http://localhost:5000 to see this
});

app.post("/register", async (req, resp) => {
  try {
    const course = new Course(req.body);
    // .save() sends data to our cloud DB, more here: https://masteringjs.io/tutorials/mongoose/save
    let result = await course.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Course already registered");
    }

  } catch (e) {
    resp.send("Something went wrong");
  }
});
app.listen(5000);