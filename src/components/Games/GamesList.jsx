//= laz r
//= 09-02-2025 11:58
//= GamesList.jsx

//= Dependencies =//
import { useSelector } from "react-redux"
import styled from "styled-components";
import { theme } from "../../styles/theme";

//= Styling =//
const GameColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Row = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    color: ${theme.colors.light2};
`;

const HeaderRow = styled.div`
    background-color: ${theme.colors.dark1};
    color: ${theme.colors.light1};
    font-weight: bold;
`;

const BoxArt = styled.img`
    max-width: 200px;
    max-height: 150px;
`;

export default function GamesList() {
    const pokemon = useSelector((state) => state.pokemon.data);
    const games = pokemon.gameAppearances;
    console.log(games);

    if (games !== null) return (
        <GameColumns>
            <Column id="main-series">
                <HeaderRow>Main Series</HeaderRow>
                <>{
                    games.mainSeries.map((game, index) =>(
                        game && (
                            <Row key={index} id={game.title}>
                                <BoxArt src={`/${game.boxArtPath}`} />
                            </Row>
                        )
                    ))
                }</>
            </Column>
            <Column id="side-series">
            <HeaderRow>Side Series</HeaderRow>
                <>{
                    games.sideSeries.map((game, index) =>(
                        game && (
                            <Row key={index} id={game.title}>
                                <BoxArt src={`/${game.boxArtPath}`} />
                            </Row>
                        )
                    ))
                }</>            </Column>
            <Column id="spin-offs">
                <HeaderRow>Spin-Offs</HeaderRow>
                <>{
                    games.spinOffs.map((game, index) =>(
                        game && (
                            <Row key={index} id={game.title}>
                                <BoxArt src={`/${game.boxArtPath}`} />
                            </Row>
                        )
                    ))
                }</>            
            </Column>
        </GameColumns>
    )
}