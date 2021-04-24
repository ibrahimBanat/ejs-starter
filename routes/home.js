const superagent = require('superagent');

const homeRoute = (req, res) => {
  let url = 'https://api.covid19api.com/world/total';
  superagent.get(url).then(result => {
    res.render('pages/index', { total: result.body });
  });
};
module.exports = {
  homeRoute,
};
