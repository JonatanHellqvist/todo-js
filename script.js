console.log("hej JS");

let newTodo = document.getElementById("newTodo");
let saveNewTodoBtn = document.getElementById("saveNewTodoBtn");
let todoList = document.getElementById("todoList");


if (localStorage.getItem("todos")) {
    console.log("LS existerar");
    //Anropa funktion för inloggad

} else {
    console.log("Skapar LS");
    let thingsTodo = ["Skriv ut list","Lägg till nytt", "Ta bort från listan", "Spara och gå hem"];
    //spara
    localStorage.setItem("todos", JSON.stringify(thingsTodo));
    //Anropa funktion för ej inloggad
}





function printList(){

    todoList.innerHTML = "";
    //hämta

    let thingsTodo = JSON.parse(localStorage.getItem("todos"));
    console.log("List from LS", thingsTodo);

    for (item of thingsTodo) {
        let li = document.createElement("li");
        li.innerText = item;
        li.id = item;

        //ta bort
        li.addEventListener("click",(e) => {

            //hämta
            let thingsTodo = JSON.parse(localStorage.getItem("todos"));
            //ändra
            thingsTodo.splice(thingsTodo.indexOf(e.target.id),1);
            //spara
            localStorage.setItem("todos", JSON.stringify(thingsTodo));

            console.log("event",e.target.id);
            console.log("click på item");

            
            console.log("efter splice", thingsTodo);
            printList();
        })

        todoList.appendChild(li);
    }
}

saveNewTodoBtn.addEventListener("click", () => {
    
    //hämta
    let thingsTodo = JSON.parse(localStorage.getItem("todos"));

    //ändra
    thingsTodo.push(newTodo.value)

    //spara
    localStorage.setItem("todos", JSON.stringify(thingsTodo));
    
    console.log("list after click", thingsTodo);
    newTodo.value = "";
    printList();
});

printList();

//55 