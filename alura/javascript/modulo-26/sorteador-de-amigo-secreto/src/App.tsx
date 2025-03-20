import React from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import styled, { createGlobalStyle } from 'styled-components';
import Cabecalho from './componentes/Cabecalho';

const GlobalStyle = createGlobalStyle`
  html {
    background: #4B69FD;
    border: 2px solid black;
    font-family: 'Poppins', sans-serif;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Root>
        <Cabecalho></Cabecalho>
        <Formulario />
      </Root>
    </>
  );
}

export default App;
