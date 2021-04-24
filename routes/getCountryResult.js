const superagent = require('superagent');

const conutryResult = (req, res) => {
  let country = req.query.city;

  let url = `https://api.covid19api.com/country/${country}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`;
  superagent.get(url).then(result => {
    res.render('pages/getCountryResult', { result: result.body });
  });
};
module.exports = {
  conutryResult,
};
