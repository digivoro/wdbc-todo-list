const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

// VARIABLES
let items = ["Buy Food", "Cook Food", "Eat Food"];

// GET ROUTES
// GET-"/"
app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("en-US", options); // es-419: Spanish for LA&Caribbean

    res.render("list", {
        day: day, //First "day" is the key, corresponds to "day" in .ejs file
        items: items
    });
});

// POST ROUTES
app.post("/", (req, res) => {
    items.push(req.body.newItem);
    res.redirect("/"); //Redirects to the render() on the Get("/") Route
});

// LISTEN
app.listen(3000, () => {
    console.log("App.js server listening on PORT 3000");
});