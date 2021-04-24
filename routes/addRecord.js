const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

const records = require('./myRecords');

const addToMyRecord = (req, res) => {
  console.log(req.body);
  let { country, confirmed, deaths, recovered, Date } = req.body;
  let sql = `INSERT INTO records (country, confirmed, deaths, recovered, Date) VALUES ($1, $2, $3, $4, $5)`;
  let safeValues = [country, confirmed, deaths, recovered, Date];
  client.query(sql, safeValues).then(() => {
    app.get('/myRecords', records.record);
  });
};

module.exports = {
  addToMyRecord,
};
