// Import required modules
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Create the Express app
const app = express();

// Set the view engine to EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "My Portfolio" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Projects" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Me" });
});

// Error handler (for unmatched routes)
app.use((req, res) => {
  res.status(404).send("404: Page Not Found");
});

// Define the port for local and cloud hosting
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

module.exports = app;
