//= laz r
//= 09-05-2025 13:30
//= weightCard.jsx

//= Dependencies =//
import { useSelector } from "react-redux";
import WeightScale from "./weightScale";
import styled from "styled-components";
import ContentCard, { Contents, ContentCardLabel } from "../ContentCard";

const WeightCard = () => {
    //= weight in kilograms
    const weight = useSelector((state) => state.pokemon.data.weight);
    const name = useSelector((state) => state.pokemon.data.name);
    console.log(`Weight: ${weight}`)
    return (
        <ContentCard>
            <ContentCardLabel>
                Weight Comparison
            </ContentCardLabel>
            <Contents>
                { WeightScale({pokemonName:name, pokemonWeight:weight, personWeight:68}) }
            </Contents>
        </ContentCard>
    )
}

export default WeightCard;