import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar, validacoes }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function posssoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }

        }
        return true;
    }
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