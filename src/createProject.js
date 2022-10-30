import IconEdit from "./edit.png";
import IconRemove from "./remove.png";
import "./style.css";

export default function createProject(title, container){
    let project = document.createElement("div");
    project.classList.add("project");
    let titleP = document.createElement("p");
    titleP.textContent = title

    let iconEdit = new Image();
    iconEdit.src = IconEdit;

    let iconRemove = new Image();
    iconRemove.src = IconRemove;

    project.appendChild(titleP);
    project.appendChild(iconEdit);
    project.appendChild(iconRemove);
    container.appendChild(project);
}