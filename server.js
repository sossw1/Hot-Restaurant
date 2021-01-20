const express = require('express');

const app = express();
const PORT = 3000;

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