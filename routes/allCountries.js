const superagent = require('superagent');
const constructors = require('./constructors');

const countries = (req, res) => {
  let url = 'https://api.covid19api.com/summary';
  superagent.get(url).then(result => {
    let objects = result.body.Countries.map(element => {
      return new constructors.Country(element);
    });

    res.render('pages/all', { allData: objects });
  });
};

module.exports = {
  countries,
};
