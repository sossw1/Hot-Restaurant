const express = require('express');

const app = express();
const PORT = 3000;

// DATA
let tables = [];

// ROUTES
// Home
app.get("/", function(req, res) {
    res.send("Home");
});

// Reserve
app.get("/reserve", function(req, res) {
    res.send("Reserve");
});

// Tables
app.get("/tables", function(req, res) {
    res.send("Tables");
});

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});