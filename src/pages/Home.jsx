//= laz r
//= 08-15-2025 21:26
//= Home.jsx
//= homepage for the artist's pokedex frontend

//= Dependencies =//
import PokePage from "./PokePage";
import Topbar from '../components/Topbar';
import { useSelector } from "react-redux";

const Home = () => {
    const pokemon = useSelector((state) => state.pokemon.data);
    if (pokemon !== '') return (
        <div>
            <Topbar />
            <PokePage />
        </div>
    ); else return <div><Topbar /></div>
}

export default Home;