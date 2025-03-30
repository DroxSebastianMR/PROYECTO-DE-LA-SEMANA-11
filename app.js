document.addEventListener("DOMContentLoaded", () => {
    const formTask = document.getElementById("form-task");
    const taskInput = document.getElementById("task");
    const descriptionInput = document.getElementById("descripcion");
    const tasksSection = document.getElementById("tasks-section");
    
    let tasks = [];
    
    formTask.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskName = taskInput.value.trim();
        const taskDescription = descriptionInput.value.trim();
        
        if (taskName && taskDescription) {
            const newTask = {
                id: Date.now(),
                name: taskName,
                description: taskDescription,
                date: new Date().toLocaleDateString(),
            };
            tasks.push(newTask);
            renderTasks();
            formTask.reset();
        }
    });
    
    function renderTasks() {
        tasksSection.innerHTML = "";
        tasks.forEach(task => {
            const taskElement = document.createElement("article");
            taskElement.classList.add("card-list-task");
            taskElement.innerHTML = `
                <header class="card-list-task-header">
                    <div class="tag-name-task">
                        <span>${task.name}</span>
                    </div>
                    <button class="btn-options-task" onclick="toggleOptions(${task.id})">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <div class="options-task" id="options-task-${task.id}" style="display:none;">
                        <ul class="list-option">
                            <li class="list-option-item" onclick="deleteTask(${task.id})">Eliminar</li>
                            <li class="list-option-item" onclick="editTask(${task.id})">Editar</li>
                        </ul>
                    </div>
                </header>
                <div class="card-list-task-body">
                    <p>${task.description}</p>
                </div>
                <footer class="card-list-task-footer">
                    <div class="time-created-task">
                        <span><i class="fa-regular fa-clock"></i>&nbsp;${task.date}</span>
                    </div>
                </footer>
            `;
            tasksSection.appendChild(taskElement);
        });
    }

    window.toggleOptions = (id) => {
        const optionsMenu = document.getElementById(`options-task-${id}`);
        optionsMenu.style.display = optionsMenu.style.display === "none" ? "block" : "none";
    };

    window.deleteTask = (id) => {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    };

    window.editTask = (id) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            taskInput.value = task.name;
            descriptionInput.value = task.description;
            tasks = tasks.filter(t => t.id !== id);
            renderTasks();
        }
    };
});
