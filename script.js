const todoForm = document.getElementById("todoForm");
const todoContainer = document.querySelector(".todo_container");
const inputTodo = document.getElementById("inputTodo");

let todos = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo = {
    content: inputTodo.value,
    isEditing: false,
  };

  todos = [...todos, newTodo];

  renderTodos();

  inputTodo.value = "";
});

const renderTodos = () => {
  todoContainer.innerHTML = "";

  todos.forEach((todo, index) => {
    const newTodo = document.createElement("li");

    const todoText = document.createElement("input");
    todoText.value = todo.content;
    todoText.disabled = true;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    const editBtn = document.createElement("button");
    editBtn.id = "editBtn";
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.textContent = "Delete";

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    newTodo.appendChild(todoText);
    newTodo.appendChild(buttonContainer);

    newTodo.dataset.index = index;

    todoContainer.appendChild(newTodo);
  });
};

todoContainer.addEventListener("click", (e) => {
  console.log("e", e);
  const editBtn = e.target.closet("editBtn");
  const deleteBtn = e.target.closet("deleteBtn");
});
