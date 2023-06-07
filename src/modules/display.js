import imgSrc from '../img/icons/menu-3dots.png';
import imgTrashSrc from '../img/icons/trash-9-24.png';

const listContainer = document.querySelector('#list-container');

function showDeletButton(liElem) {
    liElem.querySelector('img').src = imgTrashSrc;
}

function display(toDoList) {
  
  listContainer.innerHTML = '';
  let index = 0;
  toDoList.forEach(task => {
    const liElem = document.createElement('li');
    const description = task.description;
    if(task.completed) {
      liElem.innerHTML = `
        <button class="square" value="${index}">&#10003;</button>
        <p>${description}</p>
        <button class="dots-menu" ><img alt=""></button>`;
    } else {
      liElem.innerHTML = `
        <button class="square" value="${index}"></button>
        <p>${description}</p>
        <button class="dots-menu" ><img alt=""></button>`; 
    }
    liElem.querySelector('img').src = imgSrc;
    liElem.querySelector('.dots-menu').addEventListener('click', showDeletButton(liElem));

    listContainer.appendChild(liElem);
    index++;
  });

}

export default display;