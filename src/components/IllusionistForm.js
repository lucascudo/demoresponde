import React, { Component } from 'react';

class IllusionistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        question: '',
        questionBkp: '',
        answer: '',
        isPretending: false
    };
  }
    handleKeyPress = (event) => {
        this.setState({ questionBkp: this.state.question });
    }

    handleKeyUp = (event) => {
    	if (event.key === ';') {
    		this.setState({ isPretending: !this.state.isPretending});
            this.setState({ question: this.state.questionBkp + "?"} );

        } else if (this.state.isPretending) {
            this.setState({ question: this.state.questionBkp} );
            if (event.key === 'Backspace') {
                this.setState({ answer: this.state.answer.substring(0, this.state.answer.length - 1) });
            } else {
                this.setState({ answer: this.state.answer + event.key });
                this.setState({ question: this.state.question + "?" });
            }
    	} else if (event.key === 'Backspace') {
            this.setState({ question: this.state.question.substring(0, this.state.question.length - 1) });
        } else if ([ 'Shift', 'Control' ].indexOf(event.key) === -1) {
            this.setState({ question: this.state.question + event.key });
        }
    }

    handleSubmit = (event) => {
      alert(this.state.answer);
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Pergunta:
            <input
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
