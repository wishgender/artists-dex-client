//= laz r
//= 08-20-2025 19:02
//= TCG.jsx

//= Dependencies =//
import {ContentCard} from "./TCGTable";
import CardsList from "./CardsList";

const TCG = () => {
    return (
        <div>
            {ContentCard("TCG Appearances",CardsList())}
        </div>
    )
}

export default TCG;