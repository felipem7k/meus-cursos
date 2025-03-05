import { useEffect, useState } from "react"
import IRestaurante from "../../../interfaces/IRestaurante";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdministracaoRestaurantes() {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
            .catch(console.error)
    }, []);

    function excluir(restaurante: IRestaurante) {
        axios.delete(`http://localhost:8000/api/v2/restaurantes/${restaurante.id}/`)
            .then(() => {
                const listaRestaurantes = restaurantes.filter(rest => rest.id !== restaurante.id);
                setRestaurantes(listaRestaurantes);
            });
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => (
                    <TableRow>
                        <TableCell key={restaurante.id}>
                            {restaurante.nome}
                        </TableCell>
                        <TableCell key={restaurante.id}>
                            [<Link to={`/admin/restaurantes/${restaurante.id}`}>
                                 editar 
                            </Link>]
                        </TableCell>
                        <TableCell key={restaurante.id}>
                            <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </ TableContainer>
    )
}