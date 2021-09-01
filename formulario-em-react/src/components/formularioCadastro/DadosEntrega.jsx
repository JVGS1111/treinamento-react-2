import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade })
        }}>
            <TextField
                required
                value={cep}
                onChange={event => setCep(event.target.value)}
                margin="normal"
                variant="outlined"
                id="cep"
                name="cep"
                label="CEP"
                type="number"
            />
            <TextField
                required
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
                fullWidth
                margin="normal"
                name="endereco"
                variant="outlined"
                id="endereco"
                label="Endereco"
                type="text"
            />
            <TextField
                required
                value={numero}
                onChange={event => setNumero(event.target.value)}
                margin="normal"
                variant="outlined"
                id="numero"
                name="numero"
                label="Numero"
                type="number"
            />
            <TextField
                required
                value={estado}
                onChange={event => setEstado(event.target.value)}
                margin="normal"
                variant="outlined"
                name="estado"
                id="estado"
                label="Estado"
                type="text"
            />
            <TextField
                required
                value={cidade}
                onChange={event => setCidade(event.target.value)}
                margin="normal"
                variant="outlined"
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar cadastro</Button>
        </form>
    )
}

export default DadosEntrega;