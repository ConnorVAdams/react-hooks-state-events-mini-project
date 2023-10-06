import { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  })
  console.log(formData)

  const onFormChange = (e) => {
    const newData = {...formData,
      [e.target.name]: e.target.value  
    }
    setFormData(newData)
  }
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text: formData.text,
      category: formData.category,
    }
    onTaskFormSubmit(newTask)

  }

  const options = categories.map(category => {
    if (category !== "All") {
    return (
      <option key={category} value={category}>{category}</option>
    )
    }
  })

  return (
    <form onSubmit={onFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={onFormChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={onFormChange}  name="category" >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
