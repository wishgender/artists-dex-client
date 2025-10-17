//= laz r
//= 09-05-2025 13:24
//= heightCard.jsx

//= Dependencies =//
import { useSelector } from "react-redux";
import HeightComparison from "./heightComparison";
import styled from "styled-components";
import ContentCard, { Contents, ContentCardLabel } from "../ContentCard";

const HeightCard = () => {
    //= height in cm
    const height = useSelector((state) => state.pokemon.data.height);
    const name = useSelector((state) => state.pokemon.data.name);
    console.log(`Height: ${height}`);
    return (
        <ContentCard>
            <ContentCardLabel>
                Height Comparison
            </ContentCardLabel>
            <Contents>
                { HeightComparison({pokemonName: name, pokemonHeight:height, personHeight:170}) }
            </Contents>
        </ContentCard>
    )
}

export default HeightCard;