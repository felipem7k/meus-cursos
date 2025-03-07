import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";


export default function FormularioRestaurantes() {

    const parametros = useParams();
    
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (parametros.id) {
            http.get(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
                .catch(console.error);
        }
    }, [parametros]);

    function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        if (parametros.id) {
            http.put(`restaurantes/${parametros.id}/`, {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Atualizado com sucesso!');
                })
                .catch(console.error);
        } else {
            http.post("restaurantes/", {
                nome: nomeRestaurante
            })
                .then(() => {
                    alert('Cadastrado com sucesso!');
                })
                .catch(console.error);
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography
                component="h1"
                variant="h6"
            >Formulário de Restaurantes</Typography>
            <Box component='form' onSubmit={aoSubmeterForm}>
                <TextField
                    value={nomeRestaurante}
                    onChange={evento => setNomeRestaurante(evento.target.value)}
                    id="standard-basic"
                    label=""
                    placeholder="Nome do Restaurante"
                    variant="standard"
                    fullWidth
                    required
                />
                <Button sx={{marginTop: 1}} type="submit" variant="outlined" fullWidth>Salvar</Button>
            </Box>
        </Box>
    );
}