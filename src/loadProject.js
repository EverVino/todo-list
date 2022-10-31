import { createCard, createPlus } from "./creatorDOM";

export default function loadProject(todoList, indexP){
    let container = document.querySelector(".container");
    console.log(todoList);
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for(const task of todoList.projects[indexP].tasks){
        createCard(todoList.projects[indexP], task, container);
    }

    createPlus(todoList.projects[indexP],todoList.projects[indexP].tasks.length,container);
}