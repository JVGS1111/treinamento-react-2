import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const validacoes = useContext(ValidacoesCadastro)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, validarCampos, posssoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (posssoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
                id="email"
                name="email"
                label="email"
                type="email" />
            <TextField
                value={senha}
                onChange={event => setSenha(event.target.value)}
                required
                fullWidth
                onBlur={validarCampos}
                margin="normal"
                error={!erros.senha.valido}
                variant="outlined"
                id="senha"
                helperText={erros.senha.texto}
                label="senha"
                name="senha"
                type="password" />
            <Button type="submit" variant="contained" color="primary">Proximo</Button>
        </form>
    )
}

export default DadosUsuario;