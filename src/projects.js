import { doBoxTodosMain } from "./home.js";

const main = document.querySelector(".main");

function doHeaderProjects() {
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

    titleInfo.textContent = "Info Project";
    parrafoInfo.textContent =
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";

    contenedorButtoms.classList.add("buttoms");
    contenedorTitle.classList.add("titleProjects");

    contenedorButtoms.append(editarButtom, completadoButtom, returnButtom);
    contenedorTitle.append(titleInfo, contenedorButtoms);
    contenedorInfo.append(contenedorTitle, parrafoInfo);

    main.appendChild(contenedorInfo);
    doBoxTodosMain();
}

export default doHeaderProjects;
