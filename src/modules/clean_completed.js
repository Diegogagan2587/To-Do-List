import display from './display.js';
import toDoList from './toDoList_data.js';
import updateLocalStorage from './update_local_sorage.js';
import modifyCurrentTask from './modify_current_task.js';
import removeTask from './remove_task.js';
import statusHandler from './task_status.js';

function cleanCompletedTask() {
  const filtered = toDoList.filter(
    (task) => !task.completed,
  );

  toDoList.length = 0;
  toDoList.push(...filtered);
  display(toDoList);

  function upDateListeners() {
    const allDeleteButton = document.querySelectorAll('.delete-button');
    const allTaskAsInput = document.querySelectorAll('.current-task-input');
    const AllCheckBox = document.querySelectorAll('.square');
    const clearButton = document.querySelector('.clear');

    allDeleteButton.forEach((button) => { button.addEventListener('click', removeTask); });
    allTaskAsInput.forEach((inputElement) => { inputElement.addEventListener('keydown', modifyCurrentTask); });
    AllCheckBox.forEach((checkBox) => { checkBox.addEventListener('change', statusHandler.change); });
    clearButton.addEventListener('click', cleanCompletedTask);
  }

  upDateListeners();
  updateLocalStorage(toDoList);
}

export default cleanCompletedTask;