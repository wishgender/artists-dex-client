//= laz r
//= 08-19-2025 18:46
//= CardsList.jsx

//= Dependencies =//
import { useSelector } from "react-redux";
import TradingCard from "./TradingCard";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const CardWrapper = styled.div`
    display: inline-grid;
`;

const CardsList = () => {
    const pokemon = useSelector((state) => state.pokemon.data);
    const cards = pokemon.TCGappearances;
    // console.log(cards);
    // const width = Math.round(100/cards.length);
    
    if (cards !== null) return (
            cards.map((card, index) => (
                card.image && (
                    <CardWrapper key={index}>
                    {TradingCard(card.id,card.image)}
                    </CardWrapper>
                )
            ))
    )
}

export default CardsList;