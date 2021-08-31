import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/';

function DadosPessoais({ aoEnviar, validarCpf }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true)
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }}>
            <TextField
                value={nome}
                onChange={event => setNome(event.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                id="nome"
                label="Nome" />
            <TextField
                value={sobrenome}
                onChange={event => setSobrenome(event.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                id="sobrenome"
                label="Sobrenome" />
            <TextField
                fullWidth margin="normal"
                variant="outlined"
                value={cpf}
                onBlur={() => {
                    let ehValido = validarCpf(cpf)
                    setErros({ cpf: ehValido });
                }
                }
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

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form >);
}

export default DadosPessoais;