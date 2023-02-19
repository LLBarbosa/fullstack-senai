const characterNumber = 77; // Número do personagem a ser buscado

fetch(`https://rickandmortyapi.com/api/character/${characterNumber}`)
    .then(response => response.json())
    .then(data => {
    // Seleciona os elementos do card
    const image = document.querySelector('.card__image');
    const name = document.querySelector('.card__name');
    const status = document.querySelector('.card__status');
    const species = document.querySelector('.card__species');
    const gender = document.querySelector('.card__gender');
    const origin = document.querySelector('.card__origin');
    const location = document.querySelector('.card__location');

    // Preenche os elementos com as informações do personagem
    image.src = data.image;
    image.alt = data.name;
    name.textContent = data.name;
    status.textContent = data.status;
    species.textContent = data.species;
    gender.textContent = data.gender;
    origin.textContent = data.origin.name;
    location.textContent = data.location.name;
    }).catch(error => console.error(error));
