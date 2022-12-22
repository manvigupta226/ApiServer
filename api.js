const client = require("./connection.js");
const express = require("express");
const app = express();

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});

const bodyParser = require("body-parser");
const { query } = require("express");
app.use(bodyParser.json());

client.connect();
app.get("/banks", (req, res) => {
  client.query(`Select * from banks`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.get("/banks/:id", (req, res) => {
  client.query(
    `Select * from banks where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

app.get("/branches", (req, res) => {
  let query = "Select * from branches";
  if (req.query.bank_id) {
    query = query + ` where bank_id='${req.query.bank_id}'`;
  }
  console.log(req, query);
  client.query(
    query,

    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});

app.get("/branches/:ifsc", (req, res) => {
  console.log("jj", req);

  client.query(
    `Select * from branches where ifsc='${req.params.ifsc}'`,

    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});
