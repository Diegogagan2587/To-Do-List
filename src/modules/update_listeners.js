import modifyCurrentTask from './modify_current_task.js';
import removeTask from './remove_task.js';
import statusHandler from './task_status.js';

function upDateListeners() {
  const allDeleteButton = document.querySelectorAll('.delete-button');
  const allTaskAsInput = document.querySelectorAll('.current-task-input');
  const AllCheckBox = document.querySelectorAll('.square');

  allDeleteButton.forEach((button) => { button.addEventListener('click', removeTask); });
  allTaskAsInput.forEach((inputElement) => { inputElement.addEventListener('keydown', modifyCurrentTask); });
  AllCheckBox.forEach((checkBox) => { checkBox.addEventListener('change', statusHandler.change); });
}

export default upDateListeners;