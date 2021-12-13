/*
We maken een constant variabele (const=nietmeer wijzigbaar)
deze bevat 1 array met 3 objecten.
elk object bevat 3 key-value pairs
 */

const todos = [
  {
    id: "123456",
    todo: "Gras afrijden",
    checked: true,
  },
  {
    id: "423456",
    todo: "Tv kijken",
    checked: false,
  },
  {
    id: "12453456",
    todo: "Tv kijken",
    checked: true,
  },
];

const listRef = document.getElementById("list");
const myForm = document.getElementById("form");
const myField = document.getElementById("field");

renderData();

myField.oninput = function () {
  myForm.classList.remove("form--error");
};

myForm.onsubmit = function (event) {
  event.preventDefault();
  if (myField.value == "") {
    myForm.classList.add("form--error");
  } else {
    myForm.classList.remove("form--error");
    todos.push({
      id: Math.random().toString(16).substr(2),
      checked: false,
      todo: myField.value,
    });
    myField.value = "";
    renderData();
  }
};

listRef.onclick = function (event) {
  if (event.target.classList.contains("list__item__button--remove")) {
    const indexToDelete = todos.findIndex(
      (todoObj) => todoObj.id == event.target.parentElement.dataset.id
    );

    todos.splice(indexToDelete, 1);
    renderData();
  }
  if (event.target.classList.contains("list__item__button--check")) {
    const indexToDelete = todos.findIndex(
      (todoObj) => todoObj.id == event.target.parentElement.dataset.id
    );

    todos[indexToDelete].checked = !todos[indexToDelete].checked;
    renderData();
  }
};

function renderData() {
  listRef.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const classes = todos[i].checked
      ? "list__item list__item--checked"
      : "list__item";
    listRef.innerHTML += `
          <li class="${classes}" data-id="${todos[i].id}">
              <span class="list__item__text">${todos[i].todo}</span>
              <button class="list__item__button list__item__button--remove"></button>
              <button class="list__item__button list__item__button--check"></button>
          </li>    
        `;
  }
}
