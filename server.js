const express = require('express');
var path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// DATA
let tables = [
    {
        name: "Bill",
        phone: 1111111111,
        email: "bill@email.com",
        id: 101
    },
    {
        name: "Delphine",
        phone: 2222222222,
        email: "delphine@email.com",
        id: 102
    },    {
        name: "Mike",
        phone: 3333333333,
        email: "mike@email.com",
        id: 103
    },
];

// ROUTES
// Home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Reserve
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Tables
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});