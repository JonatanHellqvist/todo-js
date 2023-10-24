console.log("hej JS");

let newTodo = document.getElementById("newTodo");
let saveNewTodoBtn = document.getElementById("saveNewTodoBtn");
let todoList = document.getElementById("todoList");

let thingsTodo = ["Skriv ut list","Lägg till nytt", "Ta bort från listan", "Spara och gå hem"];

function printList(){

    todoList.innerHTML = "";

    for (item of thingsTodo) {
        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        li.addEventListener("click",(e) => {
            console.log("event",e.target.id);
            console.log("click på item");

            thingsTodo.splice(thingsTodo.indexOf(e.target.id),1);
            console.log("efter splice", thingsTodo);
            printList();
        })

        todoList.appendChild(li);
    }
}

saveNewTodoBtn.addEventListener("click", () => {
    
    thingsTodo.push(newTodo.value)
    console.log("list after click", thingsTodo);
    newTodo.value = "";
    printList();
});

printList();

//55 