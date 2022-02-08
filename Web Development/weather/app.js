const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

const appKey = "10db65aa0403d1ec695aba29ceaf525d";
const imgBaseUrl = "https://openweathermap.org/img/wn/";
port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("Server is up and running!");
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  const qry = req.body.cityName;
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${qry}&appid=${appKey}&units=${units}`;
  https
    .get(url, (response) => {
      console.log("statusCode:", response.statusCode);

      response.on("data", (data) => {
        // process.stdout.write(data);
        const weatherData = JSON.parse(data);
        const temperature = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const location = weatherData.name;
        const icon = weatherData.weather[0].icon;
        const imgUrl = `${imgBaseUrl}${icon}@2x.png`;
        res.write(
          `<h1><p>The weather is currently ${weatherDescription}.</p><P></h1>`
        );
        res.write(
          `<h1><p>The weather in ${location} is ${temperature} degrees Celcius.</p><P>`
        );
        res.write(`<img src=${imgUrl}>`);
        res.send();
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
