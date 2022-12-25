const { Client } = require("pg");

const client = new Client({
  host: "containers-us-west-16.railway.app",
  user: "postgres",
  port: 7851,
  password: "F9CXfrtNCJWuGjAeRbaL",
  database: "railway",
});

module.exports = client;
