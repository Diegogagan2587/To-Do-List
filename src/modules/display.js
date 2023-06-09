import imgSrc from '../img/icons/menu-3dots.png';
import imgTrashSrc from '../img/icons/trash-9-24.png';

const listContainer = document.querySelector('#list-container');

function showDeletButton(event) {
  const taskContainer = event.target.parentNode.parentNode;
  taskContainer.querySelector('.trash-icon').classList.toggle('hide');
}

function display(toDoList) {
  listContainer.innerHTML = '';
  let index = 0;
  toDoList.forEach((task) => {
    const liElem = document.createElement('li');
    const { description } = task;
    let checkboxClasses;
    let currentTaskInputClasses;

    if (task.completed) {
      checkboxClasses = 'square checked-text';
      currentTaskInputClasses = 'current-task-input checked-text';
    } else {
      checkboxClasses = 'square';
      currentTaskInputClasses = 'current-task-input';
    }

    liElem.innerHTML = `
        <input type="checkbox" class="${checkboxClasses}" value="${index}">
        <input class="${currentTaskInputClasses}" type='text' value="${description}" >
        <button class="delete-button trash-icon hide"><img class="trash-icon" alt=""></button>
        <button class="dots-menu-button dots-menu" ><img class="dots-menu" alt=""></button>`;

    // set img sources:
    liElem.querySelector('.dots-menu-button').querySelector('img').src = imgSrc;
    liElem.querySelector('.trash-icon').querySelector('img').src = imgTrashSrc;

    liElem.querySelector('.dots-menu-button').addEventListener('click', showDeletButton);
    liElem.querySelector('.delete-button').value = index;
    liElem.querySelector('.square').checked = task.completed;

    liElem.classList.add('padding-lef-righ-5');

    listContainer.appendChild(liElem);
    index += 1;
  });
}

export default display;