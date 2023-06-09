import toDoList from './toDoList_data.js';
import display from './display.js';
import updateLocalStorage from './update_local_sorage.js';
import upDateListeners from './update_listeners.js';

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
  upDateListeners();

  /*
  const allDeleteButton = document.querySelectorAll('.delete-button');
  allDeleteButton.forEach((button) => {
    button.addEventListener('click', removeTask);
  });*/
}
export default removeTask;