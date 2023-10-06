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

  const onTaskFormSubmit = (newTask) => {
    const updatedTasks = [...tasksToDisplay, newTask]
    setTasksToDisplay(updatedTasks)
  }

  const onButtonClick = (e) => {
    setFilter(e.target.textContent)
  }

  const onTaskDelete = (e) => {
    const updatedTasks = [...tasksToDisplay]
    updatedTasks.splice(e.target.parentNode.id, 1)
    setTasksToDisplay(updatedTasks)
  }

  const filteredTasks = tasksToDisplay.filter(task => {
    if (currentFilter === "All") {
      return true
    } else {
      return task.category === currentFilter
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onButtonClick={onButtonClick} currentFilter={currentFilter} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList onTaskDelete={onTaskDelete} tasks={filteredTasks} />
    </div>
  );
}

export default App;
