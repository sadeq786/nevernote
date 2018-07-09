const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API ROUTES 

// Get Route to retrieve all the todos from the Todo collection in the Mongo database
app.get("/api/todos", (req, res) => {
  db.Todo.find({})
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Post Route to add a new todo to the Todo collection
app.post("/api/todo", (req, res) => {
  const newTodo = {
    todo: req.body.todo,
    note: req.body.note,
    deadline: req.body.deadline,
    category: req.body.category 
  };
  
  db.Todo.create(newTodo)
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connecting to mongo production database via mLab
mongoose.connect("mongodb://prod:prod123@ds131551.mlab.com:31551/heroku_53fntrr2");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
