//= laz r
//= 08-15-2025 21:34
//= Topbar.jsx

//= Dependencies =//
import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchInput, IconButton, SearchIcon } from 'evergreen-ui';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { getPokemon } from '../features/pokemon/pokemonSlice';
import { PokemonContext } from '../context/PokemonContext';

//= styling =//
const Bar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.dark1};
    border: 3px solid ${theme.colors.dark3};
`;
const BarItem = styled.li`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    img {height: 40px}
`;
const Title = styled.h1`
    color: ${theme.colors.light1};
    font-size: large;
`;
const Form = styled.form`
    display: float;
    spacing: 4px;
    vertical-align: center;
`;
const Button = styled.button`
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    color: ${theme.colors.dark3}
`;

//= component definition =//
export default function Topbar() {
    const [searchTerm, setSearchTerm] = useState("");
    // const {pokemon, setPokemon} = useContext(PokemonContext);
    // const {pokemon, setPokemon} = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchTerm) {
            searchPokemon();
        }
        //= eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); //= runs once on mount, same as 'mounted' in Vue

    const searchPokemon = async () => {
        if (searchTerm) {
            try {
                // console.log(searchTerm);
                dispatch(getPokemon(searchTerm));
                // setPokemon(pokemon.data);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchPokemon();
    };

    return (
        <Bar>
            <BarItem>
            <Title className="title">The Artist&apos;s Pokédex</Title>
            </BarItem>
            <BarItem>
                <img src='favicon.png' />
            </BarItem>
            <BarItem>
                <Form onSubmit={handleSubmit} method="get">
                    <SearchInput
                        className='input'
                        type='text'
                        name='searchTerm'
                        placeholder='Enter species name'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        
                    />
                    <IconButton type='submit' className='submit-btn' icon={SearchIcon} />
                </Form>
            </BarItem>
        </Bar>
    );
}
