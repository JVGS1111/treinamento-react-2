import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro.jsx';
import { Container, Typography } from '@material-ui/core/';
import { validarCpf, validarSenha } from './components/models/cadastro.js'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>

      </Container>

    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
