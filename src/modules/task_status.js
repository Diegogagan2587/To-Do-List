import toDoList from './toDoList_data.js';
import updateLocalStorage from './update_local_sorage.js';

const statusHandler = {
  change(event) {
    const currentCheckBox = event.target;
    const currentTaskDescription = event.target.parentNode.querySelector('.current-task-input');
    const currentTaskIndex = event.target.value;

    if (currentCheckBox.checked) {
      toDoList[currentTaskIndex].completed = true;
      currentCheckBox.classList.add('checked');
      currentTaskDescription.classList.add('checked-text');
    } else {
      toDoList[currentTaskIndex].completed = false;
      currentCheckBox.classList.remove('checked');
      currentTaskDescription.classList.remove('checked-text');
    }
    updateLocalStorage(toDoList);
  },
};

export default statusHandler;