import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEntrega() {
    return (
        <form>
            <TextField
                margin="normal"
                variant="outlined"
                id="cep"
                label="CEP"
                type="number"
            />
            <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                id="endereco"
                label="Endereco"
                type="text"
            />
            <TextField
                margin="normal"
                variant="outlined"
                id="numero"
                label="Numero"
                type="number"
            />
            <TextField
                margin="normal"
                variant="outlined"
                id="estado"
                label="Estado"
                type="text"
            />
            <TextField
                margin="normal"
                variant="outlined"
                id="cidade"
                label="Cidade"
                type="text"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar cadastro</Button>
        </form>
    )
}

export default DadosEntrega;