import Task from './task_constructor.js';

function addTask(toDoList) {
  const description = document.getElementById('add-task').value;
  let index;
  if (toDoList.length < 1) {
    index = 0;
  } else {
    index = toDoList.length;
  }

  const newTask = new Task(description, false, index);
  toDoList.push(newTask);
}

export default addTask;