const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/bmicalculator", (req, res) => {
  //res.send("Hello World!");
  res.sendFile(`${__dirname}/bmicalculator.html`);
});

app.post("/", (req, res) => {
  // console.log(req.body);
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  res.send(`The result is ${num1 + num2}`);
});

app.post("/bmicalculator", (req, res) => {
  // console.log(req.body);
  const wt = parseFloat(req.body.wt);
  const ht = parseFloat(req.body.ht);
  const bmi = wt / ht ** 2;

  res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
