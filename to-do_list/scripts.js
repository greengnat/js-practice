// let ToDo = document.querySelector("#todoinput");
// let list = document.querySelector(".list");
// ToDo.addEventListener("keypress", function (event) {
//     console.log(event.keyCode)
//     if (event.keyCode == 13) {
//         time = new Date()
//         console.log(time.now())
//         let content = ToDo.value
//         let node = document.createElement("LI");                 // Create a <li> node
//         node.classList.add("toDoItem")
//         var textnode = document.createTextNode(`${content}`);         // Create a text node
//         node.appendChild(textnode);
//         node.setAttribute("id", `id-${time.now()}`)
//         node.addEventListener("click", function (event) {
//             clickedID = event.target.id
//             clickedLI = document.querySelector(`#${clickedID}`);
//             console.log(clickedLI)
//             clickedLI.style.backgroundColor = "green";

//         });
//         // Append the text to <li>
//         list.prepend(node);     // Append <li> to <ul>
//         ToDo.value = "";


//     }
// })
function createLiElement() {
    let newListItem = document.createElement("LI")
    let content = ToDoBar.value
    let textnode = document.createTextNode(`${content}`);
    newListItem.classList.add("toDoItem");
    newListItem.appendChild(textnode);
    xButton = document.createElement("button");
    xButton.classList.add("xButton");
    newListItem.appendChild(xButton);
    xButton.innerText = "x";
    function deleteItem() {
        newListItem.classList.toggle("delete")
    }
    xButton.addEventListener("click", deleteItem);
    list.prepend(newListItem);
    newListItem.addEventListener("click", changeColor)
    function changeColor() {
        newListItem.classList.toggle("color")
    }

}
let ToDoBar = document.querySelector("#todoinput");
let list = document.querySelector(".list");

ToDoBar.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        createLiElement()

    }
    console.log(event.keypress)
})