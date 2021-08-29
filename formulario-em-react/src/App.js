import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro.jsx';

import { Container, Typography } from '@material-ui/core/';


class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
        < FormularioCadastro />
      </Container>

    )
  }
}

export default App;
