import './style.css';

console.log('index.js is working!')

function Task (
  description,
  completed,
  index
) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

const toDoList = [
  new Task (
    'clean the bathroom',
    false,
    0
  ),
  new Task (
    'make the bed',
    true,
    1
  ),
  new Task (
    'wash the dishes',
    false,
    2
  ),
  new Task (
    'clean the city',
    false,
    3
  )
]

/* Start display to do list */
function display(toDoList) {
  const listContainer = document.querySelector('#list-container');
  listContainer.innerHTML = '';
  let index = 0;
  toDoList.forEach(task => {
    const liElem = document.createElement('li');
    const description = task.description;
    if(task.completed) {
      liElem.innerHTML = `<div class="square" value="${index}">&#10003;</div><p>${description}</p>`;
    } else {
      liElem.innerHTML = `<div class="square" value="${index}"></div><p>${description}</p>`; 
    }
    listContainer.appendChild(liElem);
    index++;
  });

}
display(toDoList);
/* finish display to do list */



