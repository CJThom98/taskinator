var buttonEl = docuemnt.querySelector("#save-task");
var tasksToDoEl = docuemnt.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
});