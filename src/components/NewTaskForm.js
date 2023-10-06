function NewTaskForm({ onTaskFormSubmit, categories, formData }) {
  
  const onFormChange = () => {

  }
  
  const options = categories.map(category => {
    if (category !== "All") {
    return (
      <option key={category} value={category}>{category}</option>
    )
    }
  })

  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
