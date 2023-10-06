import Task from './Task.js'

function TaskList({ tasksToDisplay }) {

  console.log(tasksToDisplay)

  const taskList = tasksToDisplay.map((task, index) => {
    return <Task key={index} task={task} />
  })

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
