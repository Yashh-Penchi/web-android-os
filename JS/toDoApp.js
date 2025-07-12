// TO-DO APP FUNCTIONALITY
document.getElementById("addTodoBtn").addEventListener("click", addTodo);

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑️";
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

// Optional: allow "Enter" key to add
document.getElementById("todoInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
