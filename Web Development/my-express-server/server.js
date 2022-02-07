const express = require("express");
const app = express();
const port = 9000;

// root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("contact me at abc@xyz.com");
});

// about route
app.get("/about", (req, res) => {
  res.send("My Name is Senthil");
});

// hobbies route
app.get("/hobbies", (req, res) => {
  res.send("<ul><li>Cricket</li><li>long drive</li></ul>");
});

// listen to port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
