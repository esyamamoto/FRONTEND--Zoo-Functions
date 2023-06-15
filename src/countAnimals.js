const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const animalCounts = {};
    data.species.forEach((specie) => {
      animalCounts[specie.name] = specie.residents.length;
    });
    return animalCounts;
  }

  if (!animal.sex) {
    return data.species.find((specie) => specie.name === animal.species)
      .residents.length;
  }

  const countSexFilter = data.species
    .find((specie) => specie.name === animal.species)
    .residents.filter((resident) => resident.sex === animal.sex);

  return countSexFilter.length;
};

module.exports = countAnimals;
