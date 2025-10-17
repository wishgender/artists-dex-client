//= laz r
//= 08-15-2025 23:25
//= pokemonSlice.js

//= Dependencies =//
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonData } from '../../services/api';

//= calls the service function that requests data from the API
export const getPokemon = createAsyncThunk('pokemon/getPokemon', async (species) => {
    const data = await fetchPokemonData(species);
    console.log(JSON.stringify(data.data));
    return data.data;
});

//= Pokemon slice definition
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemon.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPokemon.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getPokemon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pokemonSlice.reducer;
