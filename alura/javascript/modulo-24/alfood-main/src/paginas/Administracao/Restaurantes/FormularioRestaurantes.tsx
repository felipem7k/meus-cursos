import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function FormularioRestaurantes() {

    const parametros = useParams();
    
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (parametros.id) {
            axios.get(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
                .catch(console.error);
        }
    }, [parametros]);

    function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        if (parametros.id) {
            axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Atualizado com sucesso!');
                })
                .catch(console.error);
        } else {
            axios.post("http://localhost:8000/api/v2/restaurantes/", {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Cadastrado com sucesso!');
                })
                .catch(console.error);
        }
    }

    return (
        <form onSubmit={aoSubmeterForm}>
            <TextField
                value={nomeRestaurante}
                onChange={evento => setNomeRestaurante(evento.target.value)}
                id="standard-basic"
                label=""
                placeholder="Nome do Restaurante"
                variant="standard"
            />
            <Button type="submit" variant="outlined">Salvar</Button>
        </form>
    );
}