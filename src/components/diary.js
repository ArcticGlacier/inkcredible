import "./diary.css";
import PromptGenerator from './PromptGenerator';
import React from 'react';
import TextBox from "./TextBox";

const promptArray = ["What did you do at school today?", "What was your favourite class today and why?", "What's your favourite book?", "If you could invent anything, what would you invent?", "What was the best day ever for you?", "Who's your best friend and why?", "If you could be any superhero, which superhero would you be?", "If you could go inside any TV show or movie, which one would you choose and why?", "What makes you laugh?", "What do you want to be when you grow up?"];

export default function Diary(prop){
    
    return (
      <div className="diaryDiv">
        <div className ="header">
        <h1 id="prompting">Diary</h1>
      </div>
        <h2 id= "givenPrompt"><PromptGenerator prompts={promptArray} /></h2>
      <TextBox />
        
    </div>
    );
}