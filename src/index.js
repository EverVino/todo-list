import "./style.css";
import saludar from "./getDOM.js";
import createCard from "./createCard";
import createForm from "./createForm";

const nombre = document.createElement("p");
nombre.textContent = "John Ever Vino Duran";
saludar("John Ever Vino Duran");

let contenedor = document.querySelector(".container")
createCard("Nueva Tarea", contenedor);

createForm(contenedor);
