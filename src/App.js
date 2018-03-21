import React, { Component } from 'react';
import IllusionistForm from './components/IllusionistForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo Responde</h1>
        </header>
        <br />
        <div>
            <p>
                * Dica: O tinhoso gosta de ser exaltado e não gosta de ficar de falatório, portanto capriche nos elogios e nada de perguntas que exijam uma "dissertação" como resposta, ou o coisa ruim pode resolver puxar seu pé a noite!
            </p>
            <IllusionistForm />
        </div>
      </div>
    );
  }
}

export default App;
