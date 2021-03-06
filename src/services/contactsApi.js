import placeholder from '../images/placeholder-hp.png';

//En este archivo hacemos el fetch para la petici贸n a la api

// En la llamada a la API aplico el filtro para mostrar la especie, imagen placeholder, status y g茅nero para hacer una sola llamada a la API y limpiar el c贸digo de CharacterCard.

const getImage = (image) => {
  return image === '' ? `${placeholder}` : image;
};

const getSpecies = (species) => {
  if (species === 'human') {
    return '馃敭 Humano';
  } else if (species === 'half-giant') {
    return '馃椏 Semi-gigante';
  } else if (species === 'werewolf') {
    return '馃惡 Hombre-lobo';
  } else if (species === 'ghost') {
    return '馃懟 Fantasma';
  } else {
    return '馃懁 Muggle';
  }
};

const getStatus = (alive) => {
  return alive === true ? `Vivo 馃А` : `Muerto 馃拃`;
};

//ternario para mostrar el g茅nero en espa帽ol. creamos una funci贸n que muestre Mujer u Hombre seg煤n el gender de la api. A continuaci贸n s贸lo falta llamar a la funci贸n y ejecutar: {getGender()}

const getGender = (gender) => {
  return gender === 'male' ? `Hombre 鈾傦笍` : `Mujer 鈾?锔廯;
};

const getApiData = (house) => {
  return fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character, index) => {
        return {
          id: `${index}${character.name}`,
          image: getImage(character.image),
          name: character.name,
          species: getSpecies(character.species),
          house: character.house,
          alive: getStatus(character.alive),
          gender: getGender(character.gender),
          altNames: character.alternate_names,
        };
      });
      return cleanData;
    });
};

export default getApiData;
