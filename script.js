function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <span onclick="toggleComplete(this)" style="cursor:pointer;">${taskText}</span>
    <button class="btn btn-sm btn-danger" onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleComplete(element) {
  element.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}
