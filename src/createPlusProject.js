import IconPlus from "./plus.png";

export default function createPlusProject(container){
    const project = document.createElement("div");
    
    let iconPlus = new Image();
    iconPlus.src = IconPlus;

    project.appendChild(iconPlus);
    
    container.appendChild(project);
}