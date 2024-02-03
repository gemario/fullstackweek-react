import React, { useState } from "react";
import "./AddTask.css";
import { Button } from "./Button";

export function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState("");

  function handleInputChange(event) {
    setInputData(event.target.value);
  }

  function handleAddTaskClick() {
    handleTaskAddition(inputData);
    setInputData("");
  }

  return (
    <div className="add-task-container">
      <input
        required
        className="add-task-input"
        type="text"
        placeholder="Adicionar tarefa"
        onChange={handleInputChange}
        value={inputData}
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}
