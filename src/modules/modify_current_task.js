import toDoList from './toDoList_data.js';
import updateLocalStorage from './update_local_sorage.js';

function updateDataIn(toDoList, indexToModify, newData) {
  toDoList[indexToModify].description = newData;
}

function modifyCurrentTask(event) {
  const inIndex = event.target.parentNode.querySelector('.square').value;
  const fromNewData = event.target.value;
  if (event.key === 'Enter') {
    updateDataIn(toDoList, inIndex, fromNewData);
    updateLocalStorage(toDoList);
  }
}

export default modifyCurrentTask;