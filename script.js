const inputBox = document.querySelector("#box");
const listContainer = document.querySelector("#list-container");

function newTask() {
  if (inputBox.value === "") {
    alert("Please enter your task!");
  } else {
    let li = document.createElement("li");

    let listText = document.createElement("p");
    listText.innerHTML = inputBox.value;
    listText.classList.add("editable");

    li.appendChild(listText);

    let editButton = document.createElement("span");
    editButton.className = "edit";
    editButton.innerHTML = "\u270E";
    li.appendChild(editButton);

    let deleteBtn = document.createElement("span");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "\u00d7";
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveTask();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.className === "deleteBtn") {
    e.target.parentElement.remove();
    saveTask();
  } else if (e.target.className === "edit") {
    let listItem = e.target.parentElement;
    let listText = listItem.querySelector(".editable");

    // Toggle contentEditable property
    listText.contentEditable = !listText.isContentEditable;

    // If contentEditable is true, focus on the element
    if (listText.contentEditable) {
      listText.focus();
    } else {
      saveTask();
    }
  }
});

function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
