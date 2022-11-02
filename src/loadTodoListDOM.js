import {createCard, createForm, createFormProject,createPlus, createPlusProject, createProject} from "./creatorDOM";

export default function loadTodoList(todoList) {
    let menu = document.querySelector(".right-nav");
    let container = document.querySelector(".container");
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }

    while(menu.firstChild){
        menu.removeChild(menu.lastChild);
    }
    
    for(const project of todoList.projects){
        createProject(project, menu);
    }

    createPlusProject(menu);

    for(const task of todoList.projects[0].tasks){
        createCard(todoList.projects[0],task, container);
    }

    createPlus(todoList.projects[0], todoList.projects[0].tasks.length, container);


}

// Check for correct functions creator according to 
// flux of the project review