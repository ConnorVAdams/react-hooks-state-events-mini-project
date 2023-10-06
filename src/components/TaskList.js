import Task from './Task.js'

function TaskList({ onTaskDelete, tasks }) {

  const taskList = tasks.map((task, index) => {
    return <Task key={index} index={index} task={task} /> 
  })

  return (
    <div onClick={onTaskDelete}className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
