import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PaginaBase from './componentes/PaginaBase';
import { Configuracao } from './paginas/Configuracao';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<Configuracao />}></Route>
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
