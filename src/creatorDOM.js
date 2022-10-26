export default function createlistAction(actividad, idActividad, tarea ,proyecto ){
    const listAction = document.createElement("input");
    listAction.setAttribute("type", "checkbox");
    listAction.setAttribute("id",idActividad);
    
    const labelAction = document.createElement("label")
    labelAction.setAttribute("for", idActividad);
    labelAction.textContent = actividad;
    labelAction.appendChild(listAction);

    tarea.appendChild(labelAction);
    proyecto.appendChild(tarea);
        
}
// finish the controler
// complete for card and project
//add some event listener with button maybe review the css
// + button and quit
// for the project add and priority color


