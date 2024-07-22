/*const axios = require('axios');

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://rickandmortyapi.com/api/character/?status=alive',
    headers: {}
};

axios.request(config)
    .then((response) => {
        let alive = response.data;
        console.log(/!*JSON.stringify*!/(alive)); // Раскомментировано для вывода в формате JSON

        let characters = response.data.results;
        let filteredCharacters = []; // Инициализация массива для хранения отфильтрованных данных

        characters.forEach(character => {
            if (character.id && character.name && character.status && character.species && character.gender) {
                let newCharacter = {
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    gender: character.gender
                };
                filteredCharacters.push(newCharacter); // Добавление нового объекта в массив
            }
        });
        console.log(filteredCharacters); // Вывод отфильтрованных данных в консоль

        let filteredMale = filteredCharacters.filter(item => item.gender === 'Male');
        console.log(filteredMale);

        let addString = filteredMale.map(character => ({
            ...character,
            customField: "Тестовое задание от Сережи =)"
        }));
        console.log(addString);


    })
    .catch((error) => {
        console.log(error);
    });*/

const axios = require('axios');

// Fetch characters from the Rick and Morty API
function fetchCharacters() {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://rickandmortyapi.com/api/character/?status=alive',
        headers: {}
    };

    return axios.request(config);
}

// Filter characters based on the given criteria
function filterCharacters(characters) {
    let filteredCharacters = [];
    characters.forEach(character => {
        if (character.id && character.name && character.status && character.species && character.gender) {
            let newCharacter = {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender
            };
            filteredCharacters.push(newCharacter);
        }
    });
    return filteredCharacters;
}

// Add a custom field to each character object
function addCustomField(characters) {
    return characters.map(character => ({
        ...character,
        customField: "Тестовое задание от Сережи =)"
    }));
}

// Main execution flow
fetchCharacters()
    .then(response => {
        let characters = response.data.results;
        let filteredCharacters = filterCharacters(characters);
        //console.log(filteredCharacters);

        let filteredMale = filteredCharacters.filter(item => item.gender === 'Male');
        //console.log(filteredMale);

        let addString = addCustomField(filteredMale);
        console.log(addString);
    })
    .catch(error => {
        console.log(error);
    });

