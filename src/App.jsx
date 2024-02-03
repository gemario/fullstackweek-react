import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import { TaskDatails } from "./components/TaskDatails";

import "./App.css";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      completed: false,
    },
    {
      id: 2,
      title: "Ler livros",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=15"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  }

  function handleTaskAddition(taskTitle) {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  }

  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTask handleTaskAddition={handleTaskAddition} />
                  <Tasks
                    tasks={tasks}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                  />
                </>
              }
            />
            <Route path="/:taskTitle" element={<TaskDatails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
