import toDoList from './toDoList_data.js';
import display from './display.js';
import updateLocalStorage from './update_local_sorage.js';

function removeTask(event) {
  const currentTask = event.target.parentNode.parentNode;
  const allTaskContainer = currentTask.parentNode;
  const indexToRemove = event.target.parentNode.value;
  toDoList.splice(indexToRemove, 1);
  let newIndex = 0;
  toDoList.forEach((task) => {
    task.index = newIndex;
    newIndex += 1;
  });
  console.log(allTaskContainer);
  display(toDoList);
  updateLocalStorage(toDoList);

  /* -- Now we Re-set the listeners since display clean all -- */
  const allDeleteButton = document.querySelectorAll('.delete-button');
  allDeleteButton.forEach((button) => {
    button.addEventListener('click', removeTask);
  });
}
export default removeTask;