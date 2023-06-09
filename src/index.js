import './style.css';
import display from './modules/display.js';
import addTask from './modules/add_task.js';
import updateLocalStorage from './modules/update_local_sorage.js';
import toDoList from './modules/toDoList_data.js';
import removeTask from './modules/remove_task.js';
import modifyCurrentTask from './modules/modify_current_task.js';
import statusHandler from "./modules/task_status.js";

display(toDoList);

function upDateListeners() {
  const allDeleteButton = document.querySelectorAll('.delete-button');
  const allTaskAsInput = document.querySelectorAll('.current-task-input');
  const AllCheckBox = document.querySelectorAll('.square')
  console.log(AllCheckBox)
  allDeleteButton.forEach((button) => { button.addEventListener('click', removeTask); });
  allTaskAsInput.forEach((inputElement) => { inputElement.addEventListener('keydown', modifyCurrentTask); });
  AllCheckBox.forEach(checkBox => { checkBox.addEventListener('change', statusHandler.change ) });

}
upDateListeners();
/* Add task */

const inputForNewTask = document.getElementById('add-task');

function validateIfEnter(event) {
  if (event.key === 'Enter') {
    addTask(toDoList);
    display(toDoList);
    updateLocalStorage(toDoList);
    upDateListeners();
    inputForNewTask.value = '';
  }
}

inputForNewTask.addEventListener('keydown', validateIfEnter);

export default toDoList;
