import { AppBar, Box, Button, Container, Paper, Toolbar, Typography, Link } from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";


export default function PaginaBaseAdmin() {
    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography variant="h6">
                            Adminstração
                        </Typography>
                        <Box sx={{ display: "flex", flexGrow: 1 }}>
                            <Link component={RouterLink} to="/admin/restaurantes">
                                <Button sx={{ my: 2, color: "white" }}>
                                    Restaurantes
                                </Button>
                            </Link>
                            <Link component={RouterLink} to="/admin/restaurantes/novo">
                                <Button sx={{ my: 2, color: "white" }}>
                                    Novo Restaurante
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Paper sx={{ p: 2 }}>
                        <Outlet></Outlet>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}