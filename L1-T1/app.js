const express = require("express");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registration_db", // Replace with your DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

// Serve the registration form
app.get("/", (req, res) => {
  res.render("form");
});

// Handle form submission
app.post("/register", (req, res) => {
  const { name, email, country, phone, password, terms } = req.body;

  if (!terms) {
    return res.render("response", { message: "You must accept terms & conditions!" });
  }

  const sql = "INSERT INTO users (name, email, country, phone, password) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, country, phone, password], (err, result) => {
    if (err) {
      return res.render("response", { message: "Error: Unable to register!" });
    }
    res.render("response", { message: "Registration successful!" });
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
