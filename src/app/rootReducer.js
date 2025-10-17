//= laz r
//= 08-16-2025 15:09
//= rootReducer.js

//= Dependencies =//
import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from '../features/pokemon/pokemonSlice';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export default rootReducer;
