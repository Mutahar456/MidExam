// Wait for the HTML document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the HTML elements we need
    const form = document.getElementById("form"); // The form element
    const input = document.getElementById("input"); // The input field
    const todos = document.getElementById("todos"); // The list where tasks will be displayed

    // Add an event listener to the form for form submission
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get the trimmed value of the input field (the task text)
        const taskText = input.value.trim();

        // Check if the input is not empty
        if (taskText !== "") {
            // Call the function to add the task to the list
            addTask(taskText);
            input.value = ""; // Clear the input field after adding the task
        }
    });

    // Function to add a new task to the list
    function addTask(taskText) {
        // Create a new list item element for the task
        const taskItem = document.createElement("li");
        taskItem.className = "task"; // Assign a class to the list item

        // Create a span element to display the task text
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        // Create a checkbox input element for task completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox"; // Set the input type to "checkbox"
        checkbox.className = "complete-checkbox"; // Assign a class to the checkbox

        // Add an event listener to the checkbox for task completion
        checkbox.addEventListener("change", function() {
            completeTask(taskItem, taskTextElement, checkbox);
        });

        // Create an "Edit" button element
        const editButton = document.createElement("button");
        editButton.textContent = "Edit"; // Set the button's text
        editButton.className = "edit"; // Assign a class to the button

        // Add an event listener to the "Edit" button
        editButton.addEventListener("click", function() {
            editTask(taskItem, taskTextElement);
        });

        // Create a "Delete" button element
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"; // Set the button's text
        deleteButton.className = "delete"; // Assign a class to the button

        // Add an event listener to the "Delete" button
        deleteButton.addEventListener("click", function() {
            deleteTask(taskItem);
        });

        // Append the checkbox, task text, "Edit" button, and "Delete" button to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        // Append the task item to the list of tasks
        todos.appendChild(taskItem);
    }



});