
import IconRemove from "./remove.png"
import IconEdit from "./edit.png"
import IconPlus from "./plus.png"
import "./style.css";

export default function createCard(titleCard, project) {
    const card = document.createElement("div");
    card.classList.add("card");
    const header = document.createElement("div");
    header.classList.add("header-card");
    const title = document.createElement("a");
    title.classList.add("title-card");
    title.textContent = titleCard;
    
    header.appendChild(title);

    card.appendChild(header);

    project.appendChild(card);

    let iconEdit = new Image();
    iconEdit.src = IconEdit;
    header.appendChild(iconEdit);

    let iconRemove = new Image();
    iconRemove.src = IconRemove;
    header.appendChild(iconRemove);

    let dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = "2022-08-22";
    card.appendChild(dueDate);

    let activityList = document.createElement("div");
    activityList.classList.add("check-list-card");

    const activity = document.createElement("input");
    activity.type = "checkbox";
    activity.name = "name";
    activity.value = "value";
    activity.id = "id";
    
    let label = document.createElement("label");
    label.htmlFor="id";
    label.appendChild(document.createTextNode("Esta esta es una actividad"));
    activityList.appendChild(activity);
    activityList.appendChild(label);

    card.appendChild(activityList);

    let priority = document.createElement("p");
    priority.textContent = "High";
    card.append(priority);

}