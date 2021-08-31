
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        console.log(dadosColetados);
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCpf={validarCpf} />,
        <DadosEntrega aoEnviar={coletarDados} />
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados })
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <Fragment>
            {formularios[etapaAtual]}
        </Fragment>
    )

}

export default FormularioCadastro;