const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'taskItem';
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    const deleteBtn = taskItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', deleteTask);
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}
