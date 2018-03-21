import React, { Component } from 'react';

class IllusionistForm extends Component {
    salutations = [
        'Lúcifer',
        'Diabo',
        'Belzebu',
        'Capeta',
        'Satanás',
        'Cão',
        'Tinhoso',
        'Capa-Verde',
        'Coisa-Ruim',
        'Capiroto',
        'Chifrudo',
        'Artesão divíno',
        'Rabo-de-Seta',
        'Sete-peles',
        'Pai da mentira',
        'Maioral',
        'Pé-de-Bode',
        'Senhor dos Infernos',
        'Rei das trevas',
        'Dono do mundo',
        'Príncipe das trevas',
        'Caro Demiurgo',
        'Óh! Aquele que tudo sabe e tudo vê',
        'Óh! grande e glorioso',
        'Pai de todos os cramunhões',
        'Comandante supremo demoniaco',
        'Óh! senhor das legiões',
        'Aquele que tudo constroi e tudo em fogo consome em nome do criador',
        'És o mais belo, óh estrela da manhã',
    ];

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            question: '',
            questionBkp: '',
            currentSalutation: this.getRandomSalutation(),
            isPretending: false,
        };
    }

    getRandomSalutation = () => {
        return this.salutations[Math.floor(Math.random() * this.salutations.length)];
    }

    getFakeLetter = () => {
        let letter = [ ',', '.', '!' ][Math.floor(Math.random() * 3)] + ' ';
        if (this.state.currentSalutation.length > 0) {
            letter = this.shiftSalutation();
        } else {
            this.setState({ currentSalutation: this.getRandomSalutation() });
        }
        return letter;
    }

    shiftSalutation = () => {
        let salutation = this.state.currentSalutation.split('');
        const letter = salutation.shift();
        salutation = salutation.join('');
        this.setState({ currentSalutation: salutation });
        return letter;
    }

    handleKeyPress = (event) => {
        this.setState({ questionBkp: this.state.question });
    }

    handleKeyUp = (event) => {
        const keysToIgnore = [
            'Fn',
            'Alt',
            'Clear',
            'Dead',
            'Shift',
            'Control',
            'Delete',
            'CapsLock',
            'NumLock',
            'ArrowLeft',
            'ArrowRight',
        ];
        if (keysToIgnore.indexOf(event.key) !== -1) {
            return;
        } else if (event.key === ';') {
            this.setState({ isPretending: !this.state.isPretending });
            this.setState({ question: this.state.questionBkp + this.getFakeLetter() });
        } else if (this.state.isPretending) {
            this.setState({ question: this.state.questionBkp });
            if (event.key === 'Backspace') {
                this.setState({ answer: this.state.answer.substring(0, this.state.answer.length - 1) });
            } else {
                this.setState({ answer: this.state.answer + event.key });
                this.setState({ question: this.state.question + this.getFakeLetter() });
            }
    	} else {
            this.setState({ question: (event.key === 'Backspace') ?
                this.state.question.substring(0, this.state.question.length - 1) :
                this.state.question + event.key
            });
        }
    }

    handleSubmit = (event) => {
        this.setState({ question: '' });
        alert(this.state.answer);
        this.setState({ answer: '' });
        this.setState({ currentSalutation: this.getRandomSalutation() })
        event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Pergunta:
            <input
                className="question"
                type="text"
                value={this.state.question}
                onKeyUp={this.handleKeyUp}
                onKeyPress={this.handleKeyPress}
            />
        </label>
        <input type="submit" value="Ver Resposta" />
      </form>
    );
  }
}

export default IllusionistForm;
