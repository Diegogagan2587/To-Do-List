import { forEach } from 'lodash';
import Task from './task_constructor';

function addTask(toDoList) {
  console.log('running addTask');
  const description = document.getElementById('add-task').value;
  let index;
  if (toDoList.length < 1) {
    index = 0;
  } else {
    index = toDoList.length;
  }

  const newTask = new Task(description, false, index);
  console.log(description.value);
  toDoList.push(newTask);
  console.log(toDoList);
}

export default addTask;