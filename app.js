const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

let day = date.getDate();

// VARIABLES
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

// GET ROUTES
// GET-"/"
app.get("/", (req, res) => {

    res.render("list", {
        listTitle: day, //First "day" is the key, corresponds to "day" in .ejs file
        items: items
    });
});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        items: workItems
    });
});

app.get("/about", (req, res) => {
    res.render("about", {});
});

// POST ROUTES
app.post("/", (req, res) => {
    if (req.body.list === "Work") {
        workItems.push(req.body.newItem);
        res.redirect("work");
    } else {
        items.push(req.body.newItem);
        res.redirect("/"); //Redirects to the render() on the Get("/") Route
    }
});

// LISTEN
app.listen(3000, () => {
    console.log("App.js server listening on PORT 3000");
});