import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu></Menu>
                <Routes>
                    <Route path="/" element={<PaginaPadrao />} >
                        <Route index element={<Inicio/>}></Route>
                        <Route path="cardapio" element={<Cardapio />} ></Route>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}