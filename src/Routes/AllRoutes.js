import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LadingPageHome from "../Pages/LadingPageHome";
import PokemonDetail from '../Pages/PokemonDetail'
import Register from "../Pages/Register";
import Connect from "../Pages/Connect";

const AllRoutes = () => (
    <Router>
        {/*<Home/>*/}
        <Routes>
            <Route exact path="/" element={<LadingPageHome/>}/>
            <Route exact path="/pokedex" element={<PokemonDetail/>}/>
            <Route exact path="/registrar" element={<Register/>}/>
            <Route exact path="/logar" element={<Connect/>}/>
        </Routes>
    </Router>
);

export default AllRoutes;
