const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((animalCounts, specie) => {
      animalCounts[specie.name] = specie.residents.length;
      return animalCounts;
    }, {});
  }
  if (animal.species && !animal.sex) {
    return data.species
      .find((specie) => specie.name === animal.species).residents.length;
  }
  return data.species
    .find((specie) => specie.name === animal.species)
    .residents.filter((resident) => resident.sex === animal.sex).length;
};

module.exports = countAnimals;
