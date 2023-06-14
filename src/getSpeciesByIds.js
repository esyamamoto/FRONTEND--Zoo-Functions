const data = require('../data/zoo_data');

const { species } = data;
const getSpeciesByIds = (...ids) => species
  .filter((animals) => ids.includes(animals.id));

module.exports = getSpeciesByIds;
