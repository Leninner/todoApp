import { doBoxTodosMain } from "./home.js";

const main = document.querySelector(".main");

function doHeaderProjects(title, description) {
    let contenedorInfo = document.createElement("div"),
        contenedorTitle = document.createElement("div"),
        contenedorButtoms = document.createElement("div");

    let titleInfo = document.createElement("h1"),
        parrafoInfo = document.createElement("p");

    let editarButtom = document.createElement("input"),
        completadoButtom = document.createElement("input"),
        returnButtom = document.createElement("input");

    editarButtom.type = "button";
    editarButtom.value = "Editar";
    completadoButtom.type = "button";
    completadoButtom.value = "Completado";
    returnButtom.type = "button";
    returnButtom.value = "Volver";

    titleInfo.textContent = title;
    parrafoInfo.textContent = description;

    contenedorButtoms.classList.add("buttoms");
    contenedorTitle.classList.add("titleProjects");

    contenedorButtoms.append(editarButtom, completadoButtom, returnButtom);
    contenedorTitle.append(titleInfo, contenedorButtoms);
    contenedorInfo.append(contenedorTitle, parrafoInfo);

    main.appendChild(contenedorInfo);

    doBoxTodosMain();
}

export default doHeaderProjects;
