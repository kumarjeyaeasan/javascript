const express = require("express");
const https = require("https");
const date = require(`${__dirname}/date.js`);

const app = express();

port = 3000;

const items = ["Buy Groceries", "Clean up", "Play"];
const workItems = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { listTitle: day, items: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", items: workItems });
});

app.post("/work", (req, res) => {
  workItems.push(req.body.newItem);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about", { listTitle: "About" });
});

// app.post("/about", (req, res) => {
//   workItems.push(req.body.newItem);
//   res.redirect("/about");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
