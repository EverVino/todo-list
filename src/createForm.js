import IconRemove from "./remove.png"
import IconEdit from "./edit.png"
import IconPlus from "./plus.png"
import "./style.css";

export default function createForm(container){
    const card = document.createElement("div");
    card.classList.add("card");
    
    // let form = document.createElement("form");
    let message = document.createElement("p");
    message.classList.add("title-card");
    message.textContent = "Nueva Tarea";

    let title = document.createElement("input");
    title.type="text";
    title.name="title";
    title.placeholder="Aquí va el título";

    let dueDate = document.createElement("input");
    dueDate.type = "text";
    dueDate.name = "dueDate";
    dueDate.placeholder = "Ponga la fecha límite";

    let activityList = document.createElement("textarea");
    activityList.name = "activityList";
    activityList.placeholder = "Separe las actividades en líneas"
    activityList.rows = "10";
    activityList.cols = "20";

    let priorityContainer = document.createElement("div");
    let highPriority = document.createElement("input")
    highPriority.type="radio"
    highPriority.name = "priority";
    let labelhP = document.createElement("label");
    labelhP.appendChild(document.createTextNode("High"));
    labelhP.appendChild(highPriority);
    priorityContainer.appendChild(labelhP);

    let acceptButton = document.createElement("button");
    acceptButton.textContent = "Guardar";


    card.appendChild(message);
    card.appendChild(title);
    card.appendChild(dueDate);
    card.appendChild(activityList);
    card.appendChild(priorityContainer);
    card.appendChild(acceptButton);
    container.appendChild(card);

}