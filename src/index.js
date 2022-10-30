import "./style.css";
// import createCard from "./createCard";
// import createForm from "./createForm";
// import createPlus from "./createplus";
// import createPlusProject from "./createPlusProject";
// import createFormProject from "./createFormProject";
// import createProject from "./createProject";
import {createCard, createForm, createFormProject,createPlus, createPlusProject, createProject} from "./creatorDOM";
import {todoListFactory, projectFactory, taskFactory} from "./objectCreator";
import loadTodoList from "./loadTodoListDOM";
//Creating todo list

let todoList = todoListFactory();

let initialProject = projectFactory("For TODAY");

todoList.add(initialProject);

initialProject.index = todoList.projects.lenght-1;

const task1 = taskFactory(
    "Poner en marcha la caldera",
    "2022-08-04",
    "Abrir\nCerrar\nllenar\nejemplo", "high");

const task2 = taskFactory(
    "Poner reactivos",
    "2022-08-11",
    "Abri1r\nCerrar2\nllenar3\nejemplo2","low");

initialProject.tasks.push(task1);
initialProject.tasks.push(task2);

loadTodoList(todoList);




// let contenedor = document.querySelector(".container")

// createCard("Nueva Tarea", contenedor);

// createForm(contenedor);

// createPlus(contenedor);

// let menu = document.querySelector(".right-nav");

// createProject("Nuevo Proyecto", menu)

// createFormProject(menu);

// createPlusProject(menu);



