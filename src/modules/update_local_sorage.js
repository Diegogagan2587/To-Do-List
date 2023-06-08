function updateLocalStorage(toDoList) {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export default updateLocalStorage;