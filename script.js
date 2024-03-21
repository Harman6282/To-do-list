const listContainer = document.querySelector("#listContainer");
const input = document.querySelector("#inputBox");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  if (input.value === "") {
    alert("Enter the task first!");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    listContainer.appendChild(li);

    let span = document.createElement("SPAN");
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    // saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    // saveData();
  }
  saveData()
});

saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData()