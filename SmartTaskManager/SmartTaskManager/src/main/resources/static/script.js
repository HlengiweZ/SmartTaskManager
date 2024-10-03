const API_URL = '/tasks'; // API endpoint from Spring Boot

// Fetch tasks and display them
async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = ''; // Clear the list

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.title} - ${task.description} (Due: ${task.dueDate})</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        tasksList.appendChild(li);
    });
}

// Create a new task
async function createTask() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;

    const task = {
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
        completed: false
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
    });

    if (response.ok) {
        fetchTasks(); // Refresh the task list
    }
}

// Delete a task
async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        fetchTasks(); // Refresh the task list
    }
}

// Load tasks when the page loads
window.onload = fetchTasks;
