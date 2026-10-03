// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the <li> element for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // 2. Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // 3. Attach a click event to the delete button to remove the item
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    // 4. Append the delete button into the <li>, then the <li> into the <ul>
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    // 5. Clear the input field for the next entry
    todoInput.value = "";
}

// Event listener for the "Add" button click
addBtn.addEventListener('click', addTask);

// Event listener to allow pressing "Enter" inside the input box to add a task
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
