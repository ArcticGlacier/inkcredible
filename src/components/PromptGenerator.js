import React, { useState } from "react";

const PromptGenerator = ({ prompts }) => {
  const [newPrompt, givePrompt] = useState("");

  const generateNewPrompt = () => {
    const randomVal = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomVal];
    givePrompt(randomPrompt);
  };

  return (
    <div className="container">
      <button onClick={generateNewPrompt}>Give me a prompt!</button>
      {newPrompt && <h2 id="promptStyle"> {newPrompt}</h2>}
    </div>
  );
};

export default PromptGenerator;
