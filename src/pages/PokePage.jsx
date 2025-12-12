//= laz r
//= 08-16-2025 15:02
//= PokePage.jsx

//= Dependencies =//
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from "../features/pokemon/pokemonSlice";
import styled from 'styled-components';
import TCGTable from '../components/TCG/TCGTable';
import { theme } from '../styles/theme';
import ToC from '../components/TableOfContents';
import GamesTable from '../components/Games/GamesTable';
import HeightAndWeight from '../components/heightWeight/displayHeightWeight';

const TCGandGames = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PokePage = () => {
    const { number } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const pokemon = useSelector(
      (state) => state.pokemon.data || {}
    );
    
    console.log("Pokemon slice:", useSelector(state => state.pokemon));
    useEffect(() => {
      if (number) {
        dispatch(getPokemon(number));
      }
    }, [number, dispatch]);

    if (pokemon != '') {

      return (
        
        <div style={{justifyItems:'space-evenly'}}>
          {/* <ToC /> */}
            <h1 id="#top">{pokemon.name} | #{pokemon.dexNo}</h1>
            <h2>{pokemon.category}</h2>
            <h3>Body shape: {pokemon.shape}</h3>
            <h3>Pokedex color: {pokemon.color}</h3>
            {pokemon.typing && (
              <>
              {pokemon.typing.isDualType ? (
                <h3>
                  {pokemon.typing.type1.name}/{pokemon.typing.type2.name}-type
                  Pokemon
                </h3>
              ) : (
                <h3>{pokemon.typing.type1.name}-type Pokemon</h3>
              )}
            </>
          )}
          {pokemon.height && pokemon.weight &&
              (<HeightAndWeight id="size"/>)
          }
          <h3>
            Base Experience: 
            {pokemon.baseExperience && 
              pokemon.baseExperience
            }
          </h3>
          <TCGandGames id="tcg-vg">
          {pokemon.TCGappearances &&(
              <TCGTable />
          )}
          {pokemon.gameAppearances && (
            <GamesTable />
          )}
          </TCGandGames>
        </div>
)}
}

export default PokePage;
