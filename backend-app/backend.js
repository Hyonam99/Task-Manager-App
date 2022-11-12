// import express
const express = require("express");
const app = express();

  //Parse URL-encoded bodies - Allows us to retrieve data from submitted data
  app.use(express.urlencoded({ extended: true }));
   
  // import cors
  var cors = require("cors");
  app.use(cors());
  
  // import the harperdb instance
  const db = require("./dbconfig");

// set your preferred server port
const port = 3007;

// root endpoint response
app.get("/", (req, res) => {
  res.send("Backend Todo!");
});


//! Building the todo list Create Operation

// 1. create your post route that handles creating new todo item
app.post("/add", async (req, res) => {
  // 2. retrieve the todo from req.body
  // 3. Validate the todo to ensure the user does not submit an empty form
  if (!req.body.task || req.body.task === "") {
    res.status(400).send("Todo is required");
  } else {
    // 4. prepare the todo in an object
    const option = {
      title: req.body.title,
      completed: false,
    };
    // 5. ensure to catch the error using try/catch
    try {
      // 6. if the todo is not empty
      const response = await db.insert({
        table: "items",
        records: [option],
      });
      // 7. notify the frontend or sender with the success response
      res.status(200).send(response);
    } catch (error) {
      // 7. notify the frontend or sender with the error response
      res.status(500).send(error);
    }
  }
});

//! Building the todo list Read Operation

// 1. route to retrieve all tasks in the database
app.get("/tasks", async (req, res) => {
  // 2. use try/catch to control errors
  try {
    // 3. user query method to get all todo from the database table
    const response = await db.query("SELECT * FROM tasks.items");
    // 4. send success message to the frontend
    res.status(200).send(response);
  } catch (error) {
    // 4. send error message to the frontend
    res.status(500).send("something went wrong");
  }
});


//! Building the todo list Update Operation

// 1. route to update a todo
app.post("/edit", async (req, res) => {
  // 2. set the updated todo and specify the todo identifier - hash attribute
  const option = {
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed,
  };
  // 3. use try/catch to control errors
  try {
    // 4. send the updated todo
    const response = await db.update({
      table: "items",
      records: [option],
    });
    // 5. send success message to the frontend
    res.status(200).send(response);
  } catch (error) {
    // 5. send error message to the frontend
    res.status(500).send(error);
  }
});


//! Building the todo list Delete Operation

// 1. route to delete a todo using its id
app.post("/delete/:todo_id", async (req, res) => {
  // 2. get the id from the url parameter
  const { todo_id } = req.params;
  // 3. use try/catch to control errors
  try {
    // 4. Send a delete request to the database
    const response = await db.delete({
      table: "items",
      hashValues: [todo_id],
    });
    // 5. send success message to the frontend
    res.status(200).send(response);
  } catch (error) {
    // 5. send error message to the frontend
    res.status(500).send(error);
  }
});




// just a notification in the console
app.listen(port, () => {
  console.log(`Your server ⚡ is running 🏃‍♂️ on http://localhost:${port}`);
});



// "node backend-app/backend.js",
   
