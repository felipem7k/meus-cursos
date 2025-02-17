import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} ></Route>
                <Route path="/cardapio" element={<Cardapio />} ></Route>
            </Routes>
        </Router>
    );
}