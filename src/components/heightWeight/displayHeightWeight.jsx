//= laz r
//= 09-05-2025 13:21
//= displayHeightWeight.jsx

//= Dependencies =//
import styled from "styled-components";
import WeightCard from "./weightCard";
import HeightCard from "./heightCard";
import ContentCard, { Contents, ContentCardLabel } from "../ContentCard";
import { theme } from "../../styles/theme";

//= basically return a ContentCard with the HeightCard and 
//= WeightCard side-by-side within it

//= Styling =//
const HeightWeight = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
//= Component =//
const HeightAndWeight = () => {
    return(
        <HeightWeight>
            <HeightCard />
            <WeightCard />
        </HeightWeight>
    )
}

export default HeightAndWeight;