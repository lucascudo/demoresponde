import React, { Component } from 'react';
import IllusionistForm from './components/IllusionistForm';
import './App.css';

const logos = [
    'bio_pentagram.png',
    'pentagram-blue-2.png',
    'BlackGreenPentagram.png',
    'Pentagram.png',
    'blood_splatter.png',
    'pentagram_purple.png',
    'logo.svg',
    'pentagram_scare.png',
    'metallic_pentagram.png',
    'purplepentodd.gif',
    'Pentacle_red.png',
    'white_pentagram.png',
    'Pentagram 2.png',
];
const logo = require('./logos/' + logos[Math.floor(Math.random() * logos.length)]);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <div>
            <h1 className="App-title">Demo Responde</h1>
            <IllusionistForm />
            <p>
                * Dica: O tinhoso gosta de ser exaltado e não gosta de ficar de falatório, portanto capriche nos elogios e nada de perguntas que exijam uma "dissertação" como resposta, ou o coisa ruim pode resolver puxar seu pé a noite!
            </p>
        </div>
      </div>
    );
  }
}

export default App;
