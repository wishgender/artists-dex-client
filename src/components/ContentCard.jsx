//= laz r
//= 08-20-2025 19:17
//= ContentCard.jsx

//= Dependencies =//
import styled from "styled-components";
import { theme } from "../styles/theme";

const ContentCard = styled.div`
    border-color: ${theme.colors.dark3};
    background-color: ${theme.colors.dark2};
    background-clip: border-box;
    border-radius: 10px;
    border-width:3px;
    border-style: solid;
    // margin:0 0.2em 1.5em 0.2em;
`;

export const ContentCardLabel = styled.div`
    background-color: ${theme.colors.light2};
    color:${theme.colors.dark1};
    text-align: center;
    border-width: 3px;
    border-radius: 10px 10px 0 0;
    font-size:${theme.fontSizes.xl};
    font-weight: bold;
`;

export const Contents = styled.div`
    text-align: center;
`;

export default ContentCard;