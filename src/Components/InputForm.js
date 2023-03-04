import React, { useState } from "react";

const InputForm = ({ sendUpInput }) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (val) => {
    if (sendUpInput) sendUpInput(val);
  };

  return (
    <div>
      <input
        name="user-input"
        onChange={(e) => setUserInput(e.currentTarget.value)}
        value={userInput}
        placeholder="Descripcion"
      />
      <button
        className="generic-button"
        onClick={() => {
          handleSubmit(userInput);
        }}
      >
        Crear
      </button>
    </div>
  );
};

export default InputForm;