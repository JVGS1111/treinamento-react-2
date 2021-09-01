import React from 'react';
import { validarSenha } from '../components/models/cadastro';

const ValidacoesCadastro = React.createContext({
    cpf: semValidacao,
    senha: semValidacao,
    nome: semValidacao,
});

function semValidacao() {

    return { valido: true, texto: "" }
}

export default ValidacoesCadastro;