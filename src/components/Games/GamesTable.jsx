//= laz r
//= 09-02-2025 11:48
//= GamesTable.jsx

//= Dependencies =//
import GamesList from "./GamesList";
import ContentCard, { Contents, ContentCardLabel } from '../ContentCard';

const GamesTable = () => {
    return (
        <ContentCard>
            <ContentCardLabel>
                Video Game Appearances
            </ContentCardLabel>
            <Contents>
                <GamesList />
            </Contents>
        </ContentCard>
    )
}

export default GamesTable;