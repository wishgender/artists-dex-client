//= laz r
//= 09-07-2025 13:55
//= TableOfContents.jsx

//= Dependencies =//
import styled from "styled-components";
import { theme } from "../styles/theme";

//= Styling =//
const TableOfContents = styled.ol`

`;

const SectionHeader = styled.li`

`;

//= Component =//
export default function ToC () {
    return (
        <TableOfContents>
            <SectionHeader><a href="#top">Top of Page</a></SectionHeader>
            <SectionHeader><a href="#size">Size</a></SectionHeader>
            <SectionHeader><a href="#tcg-vg">TCG & Game Appearances</a></SectionHeader>
            <SectionHeader><a href="#manga-anime">Manga & Anime Appearances</a></SectionHeader>
        </TableOfContents>
    )
}