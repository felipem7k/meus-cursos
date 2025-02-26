import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu></Menu>
                <Routes>
                    <Route path="/" element={<PaginaPadrao />} >
                        <Route index element={<Inicio/>}></Route>
                        <Route path="cardapio" element={<Cardapio />} ></Route>
                        <Route path="sobre" element={<Sobre />} ></Route>
                    </Route>
                    <Route path="prato/:id" element={<Prato />} ></Route>
                    <Route path='*' element={<NotFound />} ></Route>
                </Routes>
                <Footer></Footer>
            </Router>
        </main>
    );
}