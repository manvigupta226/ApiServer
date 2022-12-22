const { Client } = require("pg");

const client = new Client({
  host: "containers-us-west-140.railway.app",
  user: "postgres",
  port: 6037,
  password: "uMP0s3chTxIS4OXHcm59",
  database: "railway",
});

module.exports = client;
