import React from "react";

import { Button } from "./Button";
import { useNavigate, useParams } from "react-router-dom";

import "./TaskDatails.css";

export function TaskDatails() {
  const params = useParams();
  const navigate = useNavigate();

  function handleBackButtonClick() {
    navigate(-1);
  }
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-datails-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sit
          nobis similique explicabo quae quaerat!
        </p>
      </div>
    </>
  );
}
