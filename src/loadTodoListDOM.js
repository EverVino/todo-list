import {createCard, createForm, createFormProject,createPlus, createPlusProject, createProject} from "./creatorDOM";

export default function loadTodoList(todoList) {
    let menu = document.querySelector(".right-nav");
    let container = document.querySelector(".container");
    
    for(const project of todoList.projects){
        createProject(project, menu);
    }

    createPlusProject(menu);

    for(const task of todoList.projects[0].tasks){
        createCard(task, container);
    }

    createPlus(container);


}

// Check for correct functions creator according to 
// flux of the project review