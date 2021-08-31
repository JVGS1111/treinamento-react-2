import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar, coletarDados }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form onSubmit={event => {
            event.preventDefault();
            aoEnviar({ email, senha });

        }}>
            <TextField
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
                id="email"
                label="email"
                type="email" />
            <TextField
                value={senha}
                onChange={event => setSenha(event.target.value)}
                required
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