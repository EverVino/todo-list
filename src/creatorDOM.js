
import IconRemove from "./remove.png";
import IconEdit from "./edit.png";
import IconPlus from "./plus.png";
import IconOk from "./ok.png";
import IconCancel from "./cancel.png";
import { todoList } from "./index";
import {todoListFactory, projectFactory, taskFactory} from "./objectCreator";
import loadTodoList from "./loadTodoListDOM";
import loadProject from "./loadProject";
import "./style.css";

function createCard(project, task, container) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("header-card");

    const title = document.createElement("a");
    title.classList.add("title-card");
    title.textContent = task.title;
    
    header.appendChild(title);

    card.appendChild(header);

    container.appendChild(card);

    let iconEdit = new Image();
    iconEdit.src = IconEdit;
    header.appendChild(iconEdit);

    let iconRemove = new Image();
    iconRemove.src = IconRemove;
    header.appendChild(iconRemove);

    let dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;
    card.appendChild(dueDate);

    let activityList = document.createElement("div");

    activityList.classList.add("check-list-card");

    for(const activity of task.activities){

        const ado = document.createElement("input");
        ado.type = "checkbox";
        ado.name = "name";
        ado.value = "value";
        ado.id = "id";

        let label = document.createElement("label");
        label.htmlFor="id";
        label.appendChild(document.createTextNode(activity));
        activityList.appendChild(ado);
        activityList.appendChild(label);
    }

    card.appendChild(activityList);
    

    let priority = document.createElement("p");
    priority.textContent = task.priority;
    card.dataset.index = task.index;
    
    card.dataset.indexProject = project.index;
    card.append(priority);
    
}

function cancelForm(project, n, container){
    container.removeChild(container.lastChild);
    createPlus(project, n, container);
}

function okForm(indexP){
    const title = document.querySelector(".titleText").value;
    const dueDate = document.querySelector(".dueDateText").value;
    const activityList = document.querySelector(".activityListText").value;
    const priority = document.querySelector("input[name='priority']:checked").value;
    
    let newTask = taskFactory(title,dueDate,activityList,priority);
    
    todoList.projects[indexP].tasks.push(newTask);
    
    loadProject(todoList, indexP);
}
function createForm(project, n, container){
    const card = document.createElement("div");
    card.classList.add("card");
    
    // let form = document.createElement("form");
    let message = document.createElement("p");
    message.classList.add("title-card");
    message.textContent = "Nueva Tarea";

    let title = document.createElement("input");
    title.classList.add("titleText");
    title.type="text";
    title.name="title";
    title.placeholder="New Task Title";

    let dueDate = document.createElement("input");
    dueDate.classList.add("dueDateText");
    dueDate.type = "text";
    dueDate.name = "dueDate";
    dueDate.placeholder = "Ponga la fecha límite";

    let activityList = document.createElement("textarea");
    activityList.classList.add("activityListText");
    activityList.placeholder = "Separe las actividades en líneas"
    activityList.rows = "10";
    activityList.cols = "20";

    let priorityContainer = document.createElement("div");
    
    let titlePriority = document.createElement("p");
    titlePriority.textContent="Priority"
    priorityContainer.appendChild(titlePriority);

    let highPriority = document.createElement("input");
    highPriority.type="radio"
    highPriority.name = "priority";
    highPriority.value = "high";

    let labelhP = document.createElement("label");
    labelhP.appendChild(highPriority);
    labelhP.appendChild(document.createTextNode("High"));
    priorityContainer.appendChild(labelhP);

    let mediumPriority = document.createElement("input")
    mediumPriority.type="radio"
    mediumPriority.name = "priority";
    mediumPriority.value = "medium";

    let labelmP = document.createElement("label");
    labelmP.appendChild(mediumPriority);
    labelmP.appendChild(document.createTextNode("Medium"));
    priorityContainer.appendChild(labelmP);
    
    let lowPriority = document.createElement("input")
    lowPriority.type="radio"
    lowPriority.name = "priority";
    lowPriority.value = "low";

    let labellP = document.createElement("label");
    labellP.appendChild(lowPriority);
    labellP.appendChild(document.createTextNode("Low"));
    priorityContainer.appendChild(labellP);

    const buttons = document.createElement("div")
    
    let iconOk = new Image();
    iconOk.src = IconOk;

    iconOk.addEventListener("click", (n, container) => {
        okForm(project.index, container);
    });

    let iconCancel = new Image();
    iconCancel.src = IconCancel;
    iconCancel.addEventListener("click", ()=> {
        cancelForm(project, n, container);
    });

    buttons.appendChild(iconOk);
    buttons.appendChild(iconCancel);
    card.dataset.indexProject = project.index;
    card.dataset.index = n;

    card.appendChild(message);
    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(activityList);
    card.appendChild(priorityContainer);
    card.appendChild(buttons);
    container.appendChild(card);

}

function createFormProject(container) {
    let project = document.createElement("div");

    let title = document.createElement("input")
    title.type="text";
    title.name="title";
    title.placeholder="New Project";

    let button = document.createElement("button");
    button.textContent = "Crear"

    project.appendChild(title);
    project.appendChild(button);

    container.appendChild(project);
}

function enableForm(project, n, container){
    container.removeChild(container.lastChild);
    createForm(project, n, container);
}

function createPlus(project, n, container){
    const card = document.createElement("div");
    card.classList.add("card");
    let iconPlus = new Image();
    iconPlus.src = IconPlus;
    iconPlus.addEventListener("click", () => {
        enableForm(project, n, container);
    })
    card.appendChild(iconPlus);
    
    container.appendChild(card);
}

function createPlusProject(container){
    const project = document.createElement("div");
    
    let iconPlus = new Image();
    iconPlus.src = IconPlus;

    project.appendChild(iconPlus);
    
    container.appendChild(project);
}

function createProject(project, container){
    let projectName = document.createElement("div");
    projectName.classList.add("project");
    let titleP = document.createElement("p");
    titleP.textContent = project.title;

    let iconEdit = new Image();
    iconEdit.src = IconEdit;

    let iconRemove = new Image();
    iconRemove.src = IconRemove;

    projectName.appendChild(titleP);
    projectName.appendChild(iconEdit);
    projectName.appendChild(iconRemove);
    container.appendChild(projectName);
}

export {createCard, createForm, createFormProject, createPlus, createPlusProject, createProject};