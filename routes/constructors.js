function Country(all) {
  this.country = all.Country;
  this.confirmed = all.TotalConfirmed;
  this.deaths = all.TotalDeaths;
  this.recovered = all.TotalRecovered;
  this.date = all.Date;
}
module.exports = {
  Country,
};
