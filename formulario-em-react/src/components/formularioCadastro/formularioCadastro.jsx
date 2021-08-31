import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    function formularioAtual(etapaAtual) {
        switch (etapaAtual) {
            case 0:
                return <DadosUsuario />
            case 1:
                return <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
            case 2:
                return <DadosEntrega />

            default: <Typography>Erro ao selecionar formulario atual</Typography>
        }
    }

    return (
        <Fragment>
            {formularioAtual(etapaAtual)}
        </Fragment>
    )

}


{/* 
<DadosEntrega /> */}
export default FormularioCadastro;