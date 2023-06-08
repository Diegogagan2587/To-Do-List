import toDoList from '../index.js';
import display from './display.js';
import updateLocalStorage from './update_local_sorage.js';

function removeTask(event) {
  const indexToRemove = event.target.parentNode.value;
  toDoList.splice(indexToRemove, 1);
  let newIndex = 0;
  toDoList.forEach((task) => {
    task.index = newIndex;
    newIndex += 1;
  });

  display(toDoList);
  updateLocalStorage(toDoList);
}

export default removeTask;