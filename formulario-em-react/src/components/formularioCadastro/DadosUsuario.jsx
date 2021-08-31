import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario() {
    return (
        <form>
            <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                id="email"
                label="email"
                type="email" />
            <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                id="senha"
                label="senha"
                type="password" />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario;