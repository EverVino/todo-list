export default function createFormProject(container) {
    let project = document.createElement("div");

    let title = document.createElement("input")
    title.type="text";
    title.name="title";
    title.placeholder="Nwe Project";

    let button = document.createElement("button");
    button.textContent = "Crear"

    project.appendChild(title);
    project.appendChild(button);

    container.appendChild(project);
}