const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <i class="ri-checkbox-blank-circle-line"></i>
    <span>${inputBox.value}</span>
    <span class="delete"><i class="ri-close-line"></i></span>
  `;

  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {

  if (e.target.closest(".delete")) {
    e.target.closest("li").remove();
    saveData();
    return;
  }

  const li = e.target.closest("li");
  if (li) {
    li.classList.toggle("checked");

    const icon = li.querySelector("i");
    icon.classList.toggle("ri-checkbox-blank-circle-line");
    icon.classList.toggle("ri-checkbox-circle-fill");

    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();