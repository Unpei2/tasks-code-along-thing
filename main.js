// My Tasks Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let tasksEl = document.getElementById('tasks');



// global variables
let tasks = [];
displayAll();

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'add') {
    addTask();
  } else if (selection === 'toggle') {
    toggleTask();
  } else if (selection === 'remove') {
    removeTask();
  } else if (selection === 'clear') {
    clearAll();
  }
}

// MENU FUNCTIONS
function addTask() {
  let description = prompt("Enter task description:")
  tasks.push(newtask(description));
  savetasks();
  displayAll();

}

function toggleTask() {
  console.log('Toggle Task');
}

function removeTask() {
  console.log('Remove Task');
}

function clearAll() {
  console.log('Clear All');

}


// Helper Functions
function newtask(taskDescription){
  return {
    description: taskDescription,
    completed: '',
  };
}

// Display all tasks in global tasks array
function displayAll(){
  let outputStr = '';
  for (let i = 0;i < tasks.length; i++){
    outputStr += getTasksHTMLStr(tasks[i], i)
  }
  tasksEl.innerHTML = outputStr;
}

function getTasksHTMLStr(task, i){
  return `
    <div>
      ${i}: ${task.description}
    </div>
  `;
}
// save global tasks to local storage
function savetasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks))
} 

function loadTasks(){
  let tasksStr = localStorage.getItem("tasks");
  return JSON.parse(tasksStr)
}