const express = require("express");

const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const _ = require("lodash");
const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(port, () => {
  console.log("Server started on port 3000");
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

// // Get All Articles
// app.get("/articles", (req, res) => {
//   Article.find((err, foundArticles) => {
//     if (!err) {
//       res.send(foundArticles);
//     } else {
//       res.send(err);
//     }
//   });
// });

// // Post one new Article
// app.post("/articles", (req, res) => {
//   const article = new Article({
//     title: req.body.title,
//     content: req.body.content,
//   });
//   article.save((err) => {
//     if (!err) {
//       res.send("Successfully Added!");
//     } else {
//       res.send(err);
//     }
//   });
// });

// // Delete All Articles
// app.delete("/articles", (req, res) => {
//   Article.deleteMany((err) => {
//     if (!err) {
//       res.send("All Articles removed");
//     } else {
//       res.send(err);
//     }
//   });
// });

app
  .route("/articles")
  .get((req, res) => {
    Article.find((err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    article.save((err) => {
      if (!err) {
        res.send("Successfully Added!");
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send("All Articles removed");
      } else {
        res.send(err);
      }
    });
  });

app
  .route("/articles/:titeleId")
  .get((req, res) => {
    Article.findOne({ title: req.params.titeleId }, (err, foundArticles) => {
      if (foundArticles) {
        res.send(foundArticles);
      } else {
        res.send("No Articles Found!");
      }
    });
  })
  .put((req, res) => {
    Article.updateOne(
      { title: req.params.titeleId },
      { $set: { title: req.body.title, content: req.body.content } },
      { upsert: true },
      (err, results) => {
        if (!err) {
          res.send("Updated Successfully");
        } else {
          res.send(err);
        }
      }
    );
  })
  .patch((req, res) => {
    Article.updateOne(
      { title: req.params.titeleId },
      { $set: { content: req.body.content } },
      { upsert: true },
      (err, results) => {
        if (!err) {
          res.send("Updated Successfully");
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.titeleId }, (err, results) => {
      if (!err) {
        res.send("Updated Successfully");
      } else {
        res.send(err);
      }
    });
  });
