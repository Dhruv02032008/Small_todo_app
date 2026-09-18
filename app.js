const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add Task Event Listener
todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  // Create list item (li)
  const li = document.createElement('li');

  // Create a span for the text content
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  // Toggle completed status on click
  span.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete-btn';
  
  // Remove item on click
  deleteBtn.addEventListener('click', function() {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  
  // Append new item to list
  todoList.appendChild(li);

  // Clear input box
  todoInput.value = '';
});
