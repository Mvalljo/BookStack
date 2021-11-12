const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/print-ebook-fiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/print-ebook-nonfiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/hardcover-fiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/hardcover-nonfiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/trade-fiction-paperback", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/mass-market-paperback", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/mass-market-paperback.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/paperback-nonfiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/ebook-fiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/e-book-fiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/ebook-nonfiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/e-book-nonfiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/hardcover-advice", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-advice.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/paperback-advice", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/paperback-advice.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/advice-how-to-and-miscellaneous", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/advice-how-to-and-miscellaneous.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/hardcover-graphic-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-graphic-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/paperback-graphic-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/paperback-graphic-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/manga", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/manga.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/combined-print-fiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-fiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/combined-print-nonfiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-nonfiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/chapter-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/chapter-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/children-middle-grade", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/children-middle-grade-ebook", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade-e-book.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/children-middle-grade-hardcover", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade-hardcover.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/children-middle-grade-paperback", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade-paperback.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/paperback-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/paperback-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/picture-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/picture-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/series-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/series-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/young-adult", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/young-adult.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/young-adult-ebook", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-e-book.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/young-adult-hardcover", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/young-adult-paperback", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-paperback.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/animals", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/animals.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/audio-fiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/audio-fiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/audio-nonfiction", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/audio-nonfiction.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/business-books", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/business-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/celebrities", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/celebrities.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/crime-and-punishment", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/crime-and-punishment.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/culture", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/culture.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/education", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/education.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/espionage", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/espionage.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/exp-dis-and-adv", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/expeditions-disasters-and-adventures.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/fashion-man-and-cust", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/fashion-manners-and-customs.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/food-and-fitness", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/food-and-fitness.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/games-and-activities", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/games-and-activities.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/graphic-books-and-manga", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/graphic-books-and-manga.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/hardcover-business", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-business-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/health", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/health.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/humor", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/humor.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/indigenous-americans", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/indigenous-americans.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/relationships", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/relationships.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/mass-market-monthly", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/mass-market-monthly.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/middle-grade-paperback-monthly", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/middle-grade-paperback-monthly.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/paperback-business", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/paperback-business-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/family", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/family.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/hardcover-political", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-political-books.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/race-and-civil-right", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/race-and-civil-rights.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/religion-spirit-and-faith", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/religion-spirituality-and-faith.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/science", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/science.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/sports", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/sports.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/travel", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/travel.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/young-adult-paperback-monthly", (req, res) => {
  const apikey = process.env.DB_APIKEY;
  axios({
    method: "get",
    url:
      "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-paperback-monthly.json?api-key=" +
      apikey
  })
    .then(function (response) {
      let listResults;
      const results = [];
      for (let i = 0; i < 10; i++) {
        listResults = response.data.results.books[i];
        results.push(listResults);
      }
      console.log(results);
      res.render("browse", { results, logged_in: true });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
