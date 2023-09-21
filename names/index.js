const importCountryFlod = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (importCountryFlod) => {
  return getFirstNames(importCountryFlod);
};

module.exports = getPeopleInCity;
