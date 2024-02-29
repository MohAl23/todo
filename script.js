const ul = document.querySelector("ul");
const input = document.getElementById("item");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
let itemsArray = JSON.parse(localStorage.getItem("items")) || [];

function inputLength() {
  return input.value.length;
}

function addTask() {
  if (inputLength() > 0) {
    itemsArray.push(input.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTaskToList(input.value);
    input.value = "";
  } else {
    alert("Please enter a task.");
  }
}

function deleteTasks() {
  localStorage.clear();
  ul.innerHTML = "";
  itemsArray = [];
}

function addTaskToList(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

addBtn.addEventListener("click", addTask);
deleteBtn.addEventListener("click", deleteTasks);

itemsArray.forEach(addTaskToList);
