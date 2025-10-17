//= laz r
//= 08-19-2025 20:39
//= TCGTable.jsx

//= Dependencies =//
import CardsList from "./CardsList";
import ContentCard, { Contents, ContentCardLabel } from '../ContentCard';

const TCGTable = () => {
    return (
        <ContentCard>
            <ContentCardLabel>
                Trading Card Game Appearances
            </ContentCardLabel>
            <Contents>
                <CardsList />
            </Contents>
        </ContentCard>
    )
}

export default TCGTable;