//= laz r
//= 08-15-2025 22:58
//= AppearancesList.jsx

//= Dependencies =//
import styled from 'styled-components';

//= styling =//
const AppearancesList = styled.ul`

`;
const Appearance = styled.li`

`;

//= component definition =//
export default function AppearancesList() {
    let title;
    return(
        <AppearancesList >
            <h3>{title}</h3>
            <Appearance></Appearance>
        </AppearancesList>
    )
};

            // {searchTerm && (
            //     <div className='pokemon-wrapper'>
            //         <h2 className='caption'>
            //             {pokemon.name} {pokemon.dexNo}
            //         </h2>
            //         <h3>{pokemon.category}</h3>

            //         {pokemon.typing && (
            //             <>
            //                 {pokemon.typing.isDualType ? (
            //                     <h3>
            //                         {pokemon.typing.type1.name}/{pokemon.typing.type2.name}-type Pokémon
            //                     </h3>
            //                 ) : (
            //                     <h3>{pokemon.typing.type1.name}-type Pokémon</h3>
            //                 )}
            //             </>
            //         )}

            //         {pokemon.keywords && pokemon.keywords.length > 0 && (
            //             <ul>
            //                 <h3>Keywords:</h3>
            //                 {pokemon.keywords.map((keyword, i) => (
            //                     <li key={`${pokemon._id || i}`} className="pokemon-keyword">
            //                         {keyword}
            //                     </li>
            //                 ))}
            //             </ul>
            //         )}

            //         {pokemon.gameAppearances && (
            //             <div>
            //                 <h3>In-Game Appearances</h3>

            //                 {pokemon.gameAppearances.mainSeries?.length > 0 && (
            //                     <ul>
            //                         <h4>Main Series Games</h4>
            //                         {pokemon.gameAppearances.mainSeries.map((game, i) => (
            //                             <li key={`main-${i}`} className="mainSeriesAppearance">
            //                                 {game}
            //                             </li>
            //                         ))}
            //                     </ul>
            //                 )}

            //                 {pokemon.gameAppearances.sideSeries?.length > 0 && (
            //                     <ul>
            //                         <h4>Side Series Games</h4>
            //                         {pokemon.gameAppearances.sideSeries.map((game, i) => (
            //                             <li key={`side-${i}`} className="sideSeriesAppearance">
            //                                 {game}
            //                             </li>
            //                         ))}
            //                     </ul>
            //                 )}

            //                 {pokemon.gameAppearances.spinOffs?.length > 0 && (
            //                     <ul>
            //                         <h4>Spin-Off Games</h4>
            //                         {pokemon.gameAppearances.spinOffs.map((game, i) => (
            //                             <li key={`spin-${i}`} className="spinOffAppearance">
            //                                 {game}
            //                             </li>
            //                         ))}
            //                     </ul>
            //                 )}
            //             </div>
            //         )}
            //     </div>
            // )}
