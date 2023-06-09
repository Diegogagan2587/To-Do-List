import toDoList from './toDoList_data.js';
import display from './display.js';
import updateLocalStorage from './update_local_sorage.js';
import modifyCurrentTask from './modify_current_task.js';
import statusHandler from './task_status.js';

function removeTask(event) {
  const indexToRemove = event.target.parentNode.value;
  toDoList.splice(indexToRemove, 1);
  let newIndex = 1;
  toDoList.forEach((task) => {
    task.index = newIndex;
    newIndex += 1;
  });
  display(toDoList);
  updateLocalStorage(toDoList);

  /* -- Now we Re-set the listeners since display clean all -- */
  function upDateListeners() {
    const allDeleteButton = document.querySelectorAll('.delete-button');
    const allTaskAsInput = document.querySelectorAll('.current-task-input');
    const AllCheckBox = document.querySelectorAll('.square');
    allDeleteButton.forEach((button) => { button.addEventListener('click', removeTask); });
    allTaskAsInput.forEach((inputElement) => { inputElement.addEventListener('keydown', modifyCurrentTask); });
    AllCheckBox.forEach((checkBox) => { checkBox.addEventListener('change', statusHandler.change); });
  }

  upDateListeners();
}
export default removeTask;