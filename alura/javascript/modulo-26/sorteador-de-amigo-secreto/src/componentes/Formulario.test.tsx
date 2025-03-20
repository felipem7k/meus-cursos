import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

test('quando o input está vazio, os participantes n podem ser adicionados', () => {
    render(<Formulario />);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(botao).toBeDisabled();
});