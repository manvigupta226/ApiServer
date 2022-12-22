const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345678",
  database: "BankData",
});

module.exports = client;
