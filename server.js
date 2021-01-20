const express = require('express');
var path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
let tables = [
    {
        routeName: "1",
        name: "Bill",
        phone: 1111111111,
        email: "bill@email.com",
        id: 101
    },
    {
        routeName: "2",
        name: "Delphine",
        phone: 2222222222,
        email: "delphine@email.com",
        id: 102
    },
    {
        routeName: "3",
        name: "Mike",
        phone: 3333333333,
        email: "mike@email.com",
        id: 103
    },
];

let waitList = [];

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

// API
app.get("/api/tables", function(req,res) {
    return res.json(tables);
})

app.get("/api/waitlist", function(req,res) {
    return res.json(waitList);
})

app.get("/api/tables/:table", function(req,res) {
    let chosen = req.params.table;
    console.log(chosen);

    for(let i=0; i<tables.length; i++) {
        if(chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }
})

// Handle users entering reservations - JSON input
app.post("/api/tables", function(req, res) {

    let newTable = req.body;
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(newTable);

});

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});