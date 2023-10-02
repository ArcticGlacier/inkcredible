import "./diary.css";
import PromptGenerator from './PromptGenerator';
import React from 'react';

const promptArray = ["What did you do at school today?", "What was your favourite class today and why?", "What's your favourite book?", "If you could invent anything, what would you invent?", "What was the best day ever for you?", "Who's your best friend and why?", "If you could be any superhero, which superhero would you be?", "If you could go inside any TV show or movie, which one would you choose and why?", "What makes you laugh?", "What do you want to be when you grow up?"];

export default function Diary(prop){
    
    return (
      <div className="diaryDiv">
      <h1>Diary</h1>
      <PromptGenerator prompts={promptArray} />
    </div>
    );
}

class MyComponent extends React.Component {
  state = {
      textBoxes: [], // to keep track of the text boxes
      textBoxValues: {} // to keep track of the text box values
  }

  addTextBox = () => {
      this.setState(prevState => ({
          textBoxes: [...prevState.textBoxes, '']
      }))
  }

  handleInputChange = (e, index) => {
      this.setState(prevState => ({
          textBoxValues: {
              ...prevState.textBoxValues,
              [index]: e.target.value
          }
      }))
  }

  handleSubmit = () => {
      const { textBoxValues } = this.state;

      // handle the submission of the text box values
      console.log(textBoxValues);
  }

  render() {
      const { textBoxes } = this.state;

      return (
          <div>
              {textBoxes.map((textBox, index) => (
                  <input 
                      key={index} 
                      type='text' 
                      onChange={e => this.handleInputChange(e, index)} 
                  />
              ))}
              <button onClick={this.addTextBox}>Add Text Box</button>
              <button onClick={this.handleSubmit}>Submit</button>
          </div>
      )
  }
}