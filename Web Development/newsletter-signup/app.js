const express = require("express");
const bodyParser = require("body-parser");
const client = require("@mailchimp/mailchimp_marketing");
const https = require("https");
const app = express();

const port = 3000;

client.setConfig({
  apiKey: "d42aa6b495386b148c97457ffa25c684",
  server: "us14",
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;

  const subscribingUser = {
    firstName: fName,
    lastName: lName,
    email: email,
  };
  const run = async () => {
    const response = await client.lists.addListMember("fc651d2622", {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });
    console.log(response); // (optional)
  };
  run();
  console.log(fName, lName, email);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// https
//     .get(url, (response) => {
//       console.log("statusCode:", response.statusCode);

// API Key

// d42aa6b495386b148c97457ffa25c684-us14

// list id
// fc651d2622
