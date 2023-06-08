import toDoList from './toDoList_data.js';

function updateDataIn(obj, indexToModify, newData) {
  toDoList[indexToModify].description = newData;
}

function modifyCurrentTask(event) {
  const inIndex = event.target.parentNode.querySelector('.square').value;
  const fromNewData = event.target.value;
  if (event.key === 'Enter') {
    updateDataIn(toDoList, inIndex, fromNewData);
  }
}

export default modifyCurrentTask;