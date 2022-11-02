import "./style.css";
import {createCard, createForm, createFormProject,createPlus, createPlusProject, createProject} from "./creatorDOM";
import {todoListFactory, projectFactory, taskFactory} from "./objectCreator";
import loadTodoList from "./loadTodoListDOM";
//Creating todo list

let todoList = todoListFactory();

let initialProject = projectFactory("For TODAY");

todoList.add(initialProject);

const task1 = taskFactory(
    "Poner en marcha la caldera",
    "2022-08-04",
    "Abrir\nCerrar\nllenar\nejemplo", "high");

const task2 = taskFactory(
    "Poner reactivos",
    "2022-08-11",
    "Abri1r\nCerrar2\nllenar3\nejemplo2","low");

initialProject.add(task1);
initialProject.add(task2);

loadTodoList(todoList);

export {todoList};


// change loader container 
// use loader container instead of loader todoList



