
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

function editCard(card){
    const index = card.dataset.index;
    const indexP = card.dataset.indexProject;
    const task = todoList.projects[indexP].tasks[index];

    while(card.firstChild){
        card.removeChild(card.lastChild)
    }

    let message = document.createElement("p");
    message.classList.add("title-card");
    message.textContent = "Edit task";

    let title = document.createElement("input");
    title.classList.add("titleText");
    title.type="text";
    title.name="title";
    title.value = task.title;

    let dueDate = document.createElement("input");
    dueDate.classList.add("dueDateText");
    dueDate.type = "text";
    dueDate.name = "dueDate";
    dueDate.value = task.dueDate;

    let activityList = document.createElement("textarea");
    activityList.classList.add("activityListText");
    activityList.value = task.activities.join("\n");
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

    if (task.priority == "high"){
        highPriority.checked=true;
    }
    if (task.priority == "medium"){
        mediumPriority.checked=true;
    }
    if (task.priority == "low"){
        lowPriority.checked=true;
    }
    const buttons = document.createElement("div")
    
    let iconOk = new Image();
    iconOk.src = IconOk;

    iconOk.addEventListener("click", () => {
        const title = document.querySelector(".titleText").value;
        const dueDate = document.querySelector(".dueDateText").value;
        const activityList = document.querySelector(".activityListText").value;
        const priority = document.querySelector("input[name='priority']:checked").value;
        
        let newTask = taskFactory(title,dueDate,activityList,priority);
        
        todoList.projects[indexP].tasks[index]=newTask;
        
        loadProject(todoList, indexP);
    });

    let iconCancel = new Image();
    iconCancel.src = IconCancel;
    iconCancel.addEventListener("click", ()=> {
        loadProject(todoList, indexP);
    });

    buttons.appendChild(iconOk);
    buttons.appendChild(iconCancel);
    
    card.appendChild(message);
    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(activityList);
    card.appendChild(priorityContainer);
    card.appendChild(buttons);

}
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
    iconEdit.addEventListener("click", (e) => {
        editCard(e.target.parentNode.parentNode)
        console.log("editar");       
    })

    header.appendChild(iconEdit);

    let iconRemove = new Image();
    iconRemove.src = IconRemove;
    iconRemove.addEventListener("click", (e) => {
        let index = e.target.parentNode.parentNode.dataset.index;
        let indexP = e.target.parentNode.parentNode.dataset.indexProject;
        todoList.projects[indexP].tasks.splice(index,1)
        loadProject(todoList,indexP);
    })
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
    
    todoList.projects[indexP].add(newTask);
    
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

function okProjectform(n, title, container){
    let project = projectFactory(title);
    
    todoList.add(project);
    
    loadProject(todoList,n);
    container.removeChild(container.lastChild);
    
    createProject(todoList.projects[n], container);
    createPlusProject(container);
}

function createFormProject(container) {
    let project = document.createElement("div");

    let title = document.createElement("input");
    title.type="text";
    title.name="title";
    title.placeholder="New Project";

    let buttons = document.createElement("div");

    let iconOk = new Image();
    iconOk.src = IconOk;

    iconOk.addEventListener("click", () => {
        
        let n = todoList.projects.length;
        okProjectform(n, title.value, container);
    });

    let iconCancel = new Image();
    iconCancel.src = IconCancel;
    iconCancel.addEventListener("click", ()=> {
        
        container.removeChild(container.lastChild);
        createPlusProject(container);
    });

    buttons.appendChild(iconOk);
    buttons.appendChild(iconCancel);
    
    
    project.appendChild(title);
    project.appendChild(buttons);
    

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

function enableProject(container) {
    container.removeChild(container.lastChild);
    createFormProject(container);
}

function createPlusProject(container){
    const project = document.createElement("div");
    
    let iconPlus = new Image();
    iconPlus.src = IconPlus;

    iconPlus.addEventListener("click", (project) => {
        enableProject(container);
    });

    project.appendChild(iconPlus);
    container.appendChild(project);
}

function createEditProject(index, project, title){
    todoList.projects[index].title = title;

    while(project.firstChild){
        project.removeChild(project.lastChild);
    }
    project.classList.add("project");
    let titleP = document.createElement("p");
    titleP.textContent = title;

    titleP.addEventListener("click", (e) => {
        const indexP = e.target.parentNode.dataset.indexProject;
        loadProject(todoList, indexP);
        
    });
    
    let iconEdit = new Image();
    iconEdit.src = IconEdit;
    iconEdit.addEventListener("click", (e) => {
        editProjectForm(e.target.parentNode.parentNode);
        console.log("Editar Project");
    });

    let iconRemove = new Image();
    iconRemove.src = IconRemove;
    iconRemove.addEventListener("click", (e) => {
        let n = e.target.parentNode.parentNode.dataset.indexProject;
        todoList.projects.splice(n,1);
        loadTodoList(todoList);
    });

    let buttons = document.createElement("div");
    buttons.appendChild(iconEdit);
    buttons.appendChild(iconRemove);

    project.appendChild(titleP);
    project.appendChild(buttons);
}

function editProjectForm(projectDOM){
    const index = projectDOM.dataset.indexProject;
    projectDOM.classList.remove("project");
    while(projectDOM.firstChild){
        projectDOM.removeChild(projectDOM.lastChild);
    }
    
    let title = document.createElement("input");
    title.type="text";
    title.name="title";
    title.value = todoList.projects[index].title;
    let buttons = document.createElement("div");

    let iconOk = new Image();
    iconOk.src = IconOk;
    
    iconOk.addEventListener("click", (e) => {
        let projectDOM = e.target.parentNode.parentNode;
        createEditProject(index, projectDOM, title.value);
    });

    let iconCancel = new Image();
    iconCancel.src = IconCancel;
    iconCancel.addEventListener("click", (e)=> {
        let projectDOM = e.target.parentNode.parentNode;
        let oldTitle = todoList.projects[index].title;
        createEditProject(index, projectDOM, oldTitle);
    });

    buttons.appendChild(iconOk);
    buttons.appendChild(iconCancel);

    projectDOM.appendChild(title);
    projectDOM.appendChild(buttons);
}
function createProject(project, container){
    let projectName = document.createElement("div");
    projectName.classList.add("project");
    let titleP = document.createElement("p");
    titleP.textContent = project.title;

    projectName.dataset.indexProject = project.index;

    let iconEdit = new Image();
    iconEdit.src = IconEdit;
    iconEdit.addEventListener("click", (e) => {
        editProjectForm(e.target.parentNode);
        console.log("Editar Project");
        // Modificar editar 
    });

    let iconRemove = new Image();
    iconRemove.src = IconRemove;
    iconRemove.addEventListener("click", (e) => {
        let n = e.target.parentNode.dataset.indexProject;
        
        console.log("Remover Proyecto");
        console.log(e.target.parentNode);
        console.log(n);
        todoList.projects.splice(n,1);
        loadTodoList(todoList);
    });
    
    console.log(projectName.dataset.indexProject);
    projectName.appendChild(titleP);
    projectName.appendChild(iconEdit);
    projectName.appendChild(iconRemove);
    container.appendChild(projectName);
    titleP.addEventListener("click", (e) => {
        const indexP = e.target.parentNode.dataset.indexProject;
        loadProject(todoList, indexP);
        
    });
}

export {createCard, createForm, createFormProject, createPlus, createPlusProject, createProject};