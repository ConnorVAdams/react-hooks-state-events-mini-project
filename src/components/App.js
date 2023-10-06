import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToDisplay, setTasksToDisplay] = useState( TASKS );
  const [currentFilter, setFilter] = useState("All");
  const [formData, setFormData] = useState({
    text: "",
    category: "",
  })

  const onTaskFormSubmit = () => {

  }

  const onButtonClick = () => {

  }

  const onTaskDelete = () => {

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onButtonClick={onButtonClick} currentFilter={currentFilter} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} formData={formData} />
      <TaskList onTaskDelete={onTaskDelete} tasksToDisplay={tasksToDisplay} />
    </div>
  );
}

export default App;
