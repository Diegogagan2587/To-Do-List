import './style.css';
import display from './modules/display.js';
import addTask from './modules/add_task.js';
import updateLocalStorage from './modules/update_local_sorage.js';
import toDoList from './modules/toDoList_data.js';
import removeTask from './modules/remove_task.js';

display(toDoList);
function addDeleteButtonListeners() {
  const allDeleteButton = document.querySelectorAll('.delete-button');
  allDeleteButton.forEach((button) => { button.addEventListener('click', removeTask); });
}
addDeleteButtonListeners();
/* Add task */

const inputForNewTask = document.getElementById('add-task');

function validateIfEnter(event) {
  if (event.key === 'Enter') {
    addTask(toDoList);
    display(toDoList);
    updateLocalStorage(toDoList);
    addDeleteButtonListeners();
    inputForNewTask.value = '';
  }
}

inputForNewTask.addEventListener('keydown', validateIfEnter);

export default toDoList;
