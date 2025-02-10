var ul = document.getElementById("list");
var input = document.getElementById("input");

function add() {
    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    var listitem = document.createElement("li");
    listitem.innerHTML = `${input.value} <button onclick="deleteitem(event)">Delete</button>`;
    ul.appendChild(listitem);
    input.value = ""; // Clear the input after adding
}

function deleteitem(event) {
    event.target.parentElement.remove();
}
