function Task({ index, task }) {
  return (
    <div id={index} className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
