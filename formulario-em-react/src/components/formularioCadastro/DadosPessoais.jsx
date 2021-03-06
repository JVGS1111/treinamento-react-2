import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true)

    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, posssoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (posssoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }

        }}>
            <TextField
                required
                value={nome}
                onChange={event => setNome(event.target.value)}
                fullWidth
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                margin="normal"
                variant="outlined"
                id="nome"
                name="nome"
                label="Nome" />
            <TextField
                required
                value={sobrenome}
                onChange={event => setSobrenome(event.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                name="sobrenome"
                id="sobrenome"
                label="Sobrenome" />
            <TextField
                required
                fullWidth margin="normal"
                variant="outlined"
                value={cpf}
                onBlur={(event) => validarCampos(event)}
                name="cpf"
                onChange={event => setCpf(event.target.value)}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF" />
            <FormControlLabel
                label="Promocoes"
                control={<Switch onChange={(event => setPromocoes(event.target.checked))} name="promocoes" checked={promocoes} color="primary" />} />
            <FormControlLabel
                label="Novidades"
                control={<Switch onChange={(event => setNovidades(event.target.checked))} name="Novidades" checked={novidades} color="primary" />} />

            <Button type="submit" variant="contained" color="primary">Proximo</Button>
        </form >);
}

export default DadosPessoais;