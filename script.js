const colores = Array.from(document.querySelectorAll(".color"));

const cambiar = (evento) => {

    const color = evento.target;

    switch(color.id) {
        
        case "rojo": {
            color.textContent === "Rojo" ? color.textContent = "Red" : color.textContent = "Rojo";
            color.classList.toggle("rojo");
            break;
        }
        case "amarillo" : {
            color.textContent === "Amarillo" ? color.textContent = "Yellow" : color.textContent = "Amarillo";
            color.classList.toggle("amarillo");
            break;
        }
        case "azul" : {
            color.textContent === "Azul" ? color.textContent = "Blue" : color.textContent = "Azul";
            color.classList.toggle("azul");
            break;
        }
            
        case "verde" : {
            color.textContent === "Verde" ? color.textContent = "Green" : color.textContent = "Verde";
            color.classList.toggle("verde");
            break;
        }
        case "violeta" : {
            color.textContent === "Violeta" ? color.textContent = "Purple" : color.textContent = "Violeta";
            color.classList.toggle("violeta");
            break;
        }
        case "naranja" : {
            color.textContent === "Naranja" ? color.textContent = "Orange" : color.textContent = "Naranja";
            color.classList.toggle("naranja");
            break;
        }

        case "blanco" : {
            color.textContent === "Blanco" ? color.textContent = "White" : color.textContent = "Blanco";
            color.classList.toggle("blanco");
            break;
        }
        case "negro" : {
            color.textContent === "Negro" ? color.textContent = "Black" : color.textContent = "Negro";
            color.classList.toggle("negro");
            break;
        }
        case "gris" : {
            color.textContent === "Gris" ? color.textContent = "Grey" : color.textContent = "Gris";
            color.classList.toggle("gris");
            break;
        }

    }
    
}

colores.forEach((color) => {
    color.addEventListener("mouseenter", cambiar);
    color.addEventListener("mouseleave", cambiar);
});