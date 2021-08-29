import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/';

function FormularioCadastro() {
    return (
        <form >
            <TextField fullWidth margin="normal" variant="outlined" id="nome" label="Nome" />
            <TextField fullWidth margin="normal" variant="outlined" id="sobrenome" label="Sobrenome" />
            <TextField fullWidth margin="normal" variant="outlined" id="cpf" label="CPF" />
            <FormControlLabel label="Promocoes" control={<Switch name="promocoes" defaultChecked="true" color="primary" />} />
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked="true" color="primary" />} />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form >);
}

export default FormularioCadastro;