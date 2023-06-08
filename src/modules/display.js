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
    if (task.completed) {
      liElem.innerHTML = `
        <button class="square" value="${index}">&#10003;</button>
        <p>${description}</p>
        <button class="trash-icon hide"><img alt=""></button>
        <button class="dots-menu-button dots-menu" ><img alt=""></button>`;
    } else {
      liElem.innerHTML = `
        <button class="square" value="${index}"></button>
        <p>${description}</p>
        <button class="delete-button trash-icon hide"><img class="trash-icon" alt=""></button>
        <button class="dots-menu-button dots-menu" ><img class="dots-menu" alt=""></button>`;
    }
    // set img sources:
    liElem.querySelector('.dots-menu-button').querySelector('img').src = imgSrc;
    liElem.querySelector('.trash-icon').querySelector('img').src = imgTrashSrc;

    liElem.querySelector('.dots-menu-button').addEventListener('click', showDeletButton);
    liElem.querySelector('.delete-button').value = index;

    liElem.classList.add('padding-lef-righ-5');

    listContainer.appendChild(liElem);
    index += 1;
    console.log(toDoList);
  });
}

export default display;