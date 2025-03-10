import { useEffect, useState } from "react"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IPrato";

export default function AdministracaoPratos() {
    const [pratos, setPratos] = useState<IPrato[]>([]);

    useEffect(() => {
        http.get<IPrato[]>('pratos/')
            .then(resposta => setPratos(resposta.data))
            .catch(console.error)
    }, []);

    function excluir(prato: IPrato) {
        http.delete(`pratos/${prato.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(rest => rest.id !== prato.id);
                setPratos([...listaPratos]);
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
                            Descrição
                        </TableCell>
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
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
                    {pratos.map(prato => (
                        <TableRow>
                            <TableCell key={prato.id}>
                                {prato.nome}
                            </TableCell>
                            <TableCell key={prato.id}>
                                {prato.tag}
                            </TableCell>
                            <TableCell key={prato.id}>
                                [<a href={prato.imagem} target="_blank" rel="noreferrer">ver imagem</a>]
                            </TableCell>
                            <TableCell key={prato.id}>
                                [<Link component={RouterLink} to={`/admin/pratos/${prato.id}`}>
                                    editar
                                </Link>]
                            </TableCell>
                            <TableCell key={prato.id}>
                                <Button variant="outlined" color="error" onClick={() => excluir(prato)}>
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