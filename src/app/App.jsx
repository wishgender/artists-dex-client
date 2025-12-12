//= laz r
//= 08-15-2025 21:56
//= App.jsx
//= 

//= Dependencies =//
import Home from '../pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PokePage from '../pages/PokePage';

//= Initialize app =//
const App = () => {    
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dex/:number" element={<PokePage />} />
        </Routes>
        </Router>
    )
};

export default App;
