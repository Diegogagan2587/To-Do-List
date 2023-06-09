import display from './display.js';
import toDoList from './toDoList_data.js';
import upDateListeners from './update_listeners.js';
import updateLocalStorage from './update_local_sorage.js';

function cleanCompletedTask() {
  console.log('runing clean complete task')
  const filtered = toDoList.filter(
    (task) => !task.completed,
  );
  console.log(filtered)
  toDoList.length = 0;
  toDoList.push(...filtered);
  display(toDoList);
  upDateListeners();
  updateLocalStorage(toDoList);
}

export default cleanCompletedTask;