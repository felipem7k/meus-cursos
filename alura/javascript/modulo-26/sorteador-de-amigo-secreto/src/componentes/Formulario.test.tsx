import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe('o comportamento do Formulario.tsx', () => {
    test('quando o input está vazio, os participantes n podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    });
    
    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Felipe Machado'
            }
        });
    
        fireEvent.click(botao);
        
        expect(input).toHaveValue('');
        expect(input).toHaveFocus();
    });
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Felipe Machado'
            }
        });
    
        fireEvent.click(botao);
    
        fireEvent.change(input, {
            target: {
                value: 'Felipe Machado'
            }
        });
    
        fireEvent.click(botao);
        
        const mensagemDeErro = screen.getByRole('alert');
        
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');
    });
    
    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers();
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('button');
    
        fireEvent.change(input, {
            target: {
                value: 'Felipe Machado'
            }
        });
    
        fireEvent.click(botao);
    
        fireEvent.change(input, {
            target: {
                value: 'Felipe Machado'
            }
        });
    
        fireEvent.click(botao);
        
        let mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        });
        
        mensagemDeErro = screen.queryByRole('alert');
        expect(mensagemDeErro).toBeNull();
    });
});