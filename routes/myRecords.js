const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

const record = (req, res) => {
  let sql = 'SELECT * FROM records;';
  client.query(sql).then(result => {
    console.log('alive');
    res.render('pages/myRecords', { data: result.rows });
  });
};

module.exports = {
  record,
};
