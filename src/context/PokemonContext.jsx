//= laz r
//= 08-16-2025 18:10
//= PokemonContext.jsx

//= Dependencies =//
import { createContext, useContext, useState, useEffect } from "react";
import debounce from 'lodash.debounce';
import { useDispatch } from "react-redux";
import { getPokemon } from "../features/pokemon/pokemonSlice";
const BASE_URL = 'http://localhost:42069/api';

//= Create context =//
export const PokemonContext = createContext();
export const usePokemonContext = () => useContext(PokemonContext);

//= Initial Pokemon state =//
const defaultPokemon = {
    data: '',
};

export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState(defaultPokemon);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchPokemon = async (searchTerm) => {
        if (!searchTerm) return;
        try {
            setIsLoading(true);
            const res = dispatch(getPokemon(searchTerm));
            setPokemon(res.data);
        } catch (err) {
            console.error('Failed to fetch Pokemon', err);
        } finally {
            setIsLoading(false);
        }
    }

    const debouncedFetch = debounce((searchTerm) => fetchPokemon(searchTerm), 500);

    useEffect(() => {
        const searchTermString = searchTerm;
        debouncedFetch(searchTermString);
        return debouncedFetch.cancel;
    }, [pokemon]);

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                searchTerm,
                isLoading,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};
