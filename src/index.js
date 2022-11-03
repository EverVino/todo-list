import "./style.css";
import {createCard, createForm, createFormProject,createPlus, createPlusProject, createProject} from "./creatorDOM";
import {addProject, todoListFactory, projectFactory, taskFactory} from "./objectCreator";
import loadTodoList from "./loadTodoListDOM";
//Creating todo list
let titulo = document.querySelector(".primary");
titulo.addEventListener("click",() => {
    localStorage.removeItem("todoList");
    // Storage.removeItem("todoList");
})
let todoList

if(localStorage.getItem('todoList')){
    todoList = JSON.parse(localStorage.getItem('todoList'));
    console.log(todoList);
}
else {
    todoList = todoListFactory();

    let initialProject = projectFactory("For TODAY");

    addProject(todoList, initialProject);
    
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log("added to local Storage")
    console.log(JSON.parse(localStorage.getItem("todoList")));
}


// const task1 = taskFactory(
//     "Poner en marcha la caldera",
//     "2022-08-04",
//     "Abrir\nCerrar\nllenar\nejemplo", "high");

// const task2 = taskFactory(
//     "Poner reactivos",
//     "2022-08-11",
//     "Abri1r\nCerrar2\nllenar3\nejemplo2","low");

// initialProject.add(task1);
// initialProject.add(task2);

loadTodoList(todoList);

window.addEventListener("storage", () => {
    console.log(todoList);
    localStorage.setItem('todoList', todoList);
});

export {todoList};


// change loader container 
// use loader container instead of loader todoList



