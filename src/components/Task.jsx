import React from "react";
import { useNavigate } from "react-router-dom";

import "./Task.css";
import { Info, XCircle } from "@phosphor-icons/react";

export function Task({ task, handleTaskClick, handleTaskDeletion }) {
  const navigate = useNavigate();

  function handleTaskDatailsClick() {
    navigate(`/${task.title}`);
  }
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="button-container">
        <button
          className="see-task-datails-button"
          onClick={handleTaskDatailsClick}
          title="Detalhes"
        >
          <Info size={26} />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
          title="Remover"
        >
          <XCircle size={26} />
        </button>
      </div>
    </div>
  );
  //return <div className="task-container">{task.title}</div>;
}
