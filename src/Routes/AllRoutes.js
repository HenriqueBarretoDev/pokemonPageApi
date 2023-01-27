import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import LadingPageHome from "../Pages/LadingPageHome";
import PokemonDetail from '../Pages/PokemonDetail'
import Register from "../Pages/Register";
import Connect from "../Pages/Connect";
import Page404 from '../Pages/Page404'

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LadingPageHome/>}/>
                <Route exact path="/pokedex" element={<PokemonDetail/>}/>
                <Route exact path="/registrar" element={<Register/>}/>
                <Route exact path="/logar" element={<Connect/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;
