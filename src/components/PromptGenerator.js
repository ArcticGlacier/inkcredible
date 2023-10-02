import React, { useState } from 'react';

const PromptGenerator = ({ prompts }) => {
    const [newPrompt, givePrompt] = useState("");

const generateNewPrompt = () => {
    const randomVal = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomVal];
    givePrompt(randomPrompt);
}; 

    return (
        <div>
            <h1>Diary Entry Subject</h1>
            <button onClick={generateNewPrompt}>Give me a subject</button>
            {newPrompt && <p>Your subject for today: {newPrompt}</p>}
        </div>
    );
};

export default PromptGenerator; 
