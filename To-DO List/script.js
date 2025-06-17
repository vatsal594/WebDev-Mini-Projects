const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button class="remove">X</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  li.querySelector(".remove").addEventListener("click", () => {
    li.remove();
  });
});
