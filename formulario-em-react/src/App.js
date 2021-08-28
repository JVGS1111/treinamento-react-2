import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro.jsx';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1> Formulario de cadastro</h1 >
        < FormularioCadastro />
      </Fragment>

    )
  }
}

export default App;
