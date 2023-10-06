import Task from './Task.js'

function TaskList({ onTaskDelete, tasks }) {

  const taskList = tasks.map((task, index) => {
    return <Task onTaskDelete={onTaskDelete} key={index} id={index} text={task.text} category={task.category} /> 
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
