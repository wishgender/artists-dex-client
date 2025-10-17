//= laz r
//= 08-15-2025 23:35
//= api.js

//= Dependencies =//
import axios from 'axios';
const BASE_URL = process.env.API_URL;
const TCGDEX_CARDS_URL = 'https://api.pokemontcg.io/v2/cards';


export const fetchPokemonData = async (species) => {
    species = species.trim().toLowerCase();
    if (species === 'gloogy' || species === 'hoko') {
        species = 'terapagos'
    } else if (species === 'emmy' || species === 'lynne') {
        species = 'braixen'
    } else if (species === 'lillian' || species === 'vivian') {
        species = 'lilligant'
    }
    const response = await axios.get(`${BASE_URL}/api/pokemon?species=${species}`);
    // console.log(response.data)
    return response;
};

export const fetchCards = async (illustrator) => {
    illustrator = illustrator.trim();
    const response = await axios.get(`${TCGDEX_CARDS_URL}?artist=${illustrator}`);
    
}

// export const fetchType
