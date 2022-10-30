import IconPlus from "./plus.png";

export default function createPlus(container){
    const card = document.createElement("div");
    card.classList.add("card");
    let iconPlus = new Image();
    iconPlus.src = IconPlus;

    card.appendChild(iconPlus);
    
    container.appendChild(card);
}