const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
  <i class="checkbox ri-checkbox-blank-circle-line"></i>
  <span class="task-text">${inputBox.value}</span>
  <span class="delete"><i class="ri-close-line"></i></span>
`;
  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {

  const li = e.target.closest("li");
  if (!li) return;
  // delete task
  if (e.target.closest(".delete")) {
    li.remove();
    saveData();
    return;
  }

  
    li.classList.toggle("checked");

    const checkbox = li.querySelector(".checkbox");
    checkbox.classList.toggle("ri-checkbox-blank-circle-line");
    checkbox.classList.toggle("ri-checkbox-circle-fill");

    saveData();
  });

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask(); 