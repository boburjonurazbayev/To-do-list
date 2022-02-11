// Get elements
const elToDoForm = findElement(".todo__form");
const elToDoInput = findElement(".todo__input", elToDoForm);
const elToDoList = findElement(".todo__list");

let todos = ["wake up", "brush teeth", "wash hands"];

function renderToDos(todosArray, element) {
  for (let i = 0; i < todosArray.length; i++) {
    //   Create elements
    const newLi = createElement("li");
    const newInput = createElement("input");
    const newText = createElement("p");
    const newEditButton = createElement("button");
    const newDeleteButton = createElement("button");

    // Set attributes
    newLi.setAttribute("class", "todo__item");
    newInput.setAttribute("type", "checkbox");
    newText.setAttribute("class", "todo__text");
    newEditButton.setAttribute("class", "todo__edit-button");
    newDeleteButton.setAttribute("class", "todo__delete-button");
    newEditButton.textContent = "Edit";
    newDeleteButton.textContent = "Del";

    newText.textContent = todos[i];

    newLi.appendChild(newInput);
    newLi.appendChild(newText);
    newLi.appendChild(newEditButton);
    newLi.appendChild(newDeleteButton);
    element.appendChild(newLi);
  }
}

renderToDos(todos, elToDoList);

function handleFormSubmit(evt) {
  evt.preventDefault();

  //   Clear input
  elToDoList.innerHTML = null;

  //   Get user value
  const newToDoTitile = elToDoInput.value.trim();

  //   hasText
  if (newToDoTitile.length > 0) {
    todos.push(newToDoTitile);
  }

  renderToDos(todos, elToDoList);

  //   Clear input
  elToDoInput.value = null;
}

elToDoForm.addEventListener("submit", handleFormSubmit);
