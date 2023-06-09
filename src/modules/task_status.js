import toDoList from "./toDoList_data.js";
import updateLocalStorage from "./update_local_sorage.js";

const statusHandler = {
    change (event) {
        const currentCheckBox = event.target;
        const currentTaskDescription = event.target.parentNode.querySelector('.current-task-input');
        const currentTaskIndex = event.target.value;
        currentCheckBox.classList.toggle('checked');
        currentTaskDescription.classList.toggle('checked-text')
        if(currentCheckBox.classList.contains('checked')) {
            toDoList[currentTaskIndex].completed = true;
        } else {
            toDoList[currentTaskIndex].completed = false;
        }
        updateLocalStorage(toDoList);
    }
}

export default statusHandler;