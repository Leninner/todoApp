import doHeaderProjects from "./projects.js";

const main = document.querySelector(".main");

let tareasRealizadas = [],
    proyectosRealizados = [];

//NOTE: Funciones para crear los formularios

function doFormItem(title, typeTitle) {
    let overlay = document.createElement("div"),
        popup = document.createElement("div"),
        cerrarPopup = document.createElement("div"),
        fas = document.createElement("i"),
        titleAddItem = document.createElement("h3"),
        formAddItem = document.createElement("form"),
        contenedorInputs = document.createElement("div"),
        titleItem = document.createElement("input"),
        descriptionItem = document.createElement("input"),
        dueDateItem = document.createElement("input"),
        priorityListItem = document.createElement("select"),
        optionPriorityOne = document.createElement("option"),
        optionPriorityTwo = document.createElement("option"),
        optionPriorityThree = document.createElement("option"),
        btnAñadir = document.createElement("input");

    titleAddItem.textContent = title;

    overlay.classList.add("overlay", "overlayMain");
    popup.classList.add("popup", "popupMain");
    cerrarPopup.classList.add("cerrarPopup", "cerrarPopupMain");
    fas.classList.add("fas", "fa-times");
    contenedorInputs.classList.add("contenedor-inputs");
    btnAñadir.classList.add("btn-añadir", "btn-añadirMain");

    btnAñadir.type = "button";
    btnAñadir.value = "Añadir";
    titleItem.type = "text";
    titleItem.placeholder = typeTitle;
    titleItem.setAttribute("id", "titleItem");
    descriptionItem.type = "text";
    descriptionItem.placeholder = "Añade una descripción";
    descriptionItem.setAttribute("id", "descriptionItem");
    dueDateItem.type = "date";
    dueDateItem.setAttribute("id", "dueDate");
    priorityListItem.name = "combo";
    priorityListItem.setAttribute("id", "priorityItem");
    optionPriorityOne.value = "1";
    optionPriorityOne.textContent = "Prioridad: Alta";
    optionPriorityOne.setAttribute("id", "optionOne");
    optionPriorityTwo.value = "2";
    optionPriorityTwo.textContent = "Prioridad: Media";
    optionPriorityTwo.setAttribute("id", "optionTwo");
    optionPriorityThree.value = "3";
    optionPriorityThree.textContent = "Prioridad: Baja";
    optionPriorityThree.setAttribute("id", "optionThree");

    priorityListItem.append(
        optionPriorityOne,
        optionPriorityTwo,
        optionPriorityThree
    );

    contenedorInputs.append(
        titleItem,
        descriptionItem,
        dueDateItem,
        priorityListItem
    );

    formAddItem.append(contenedorInputs, btnAñadir);
    cerrarPopup.appendChild(fas);
    popup.append(cerrarPopup, titleAddItem, formAddItem);
    overlay.appendChild(popup);
    main.appendChild(overlay);
}

function doFormProjects(title, typeTitle) {
    let overlay = document.createElement("div"),
        popup = document.createElement("div"),
        cerrarPopup = document.createElement("div"),
        fas = document.createElement("i"),
        titleAddItem = document.createElement("h3"),
        formAddItem = document.createElement("form"),
        contenedorInputs = document.createElement("div"),
        titleItem = document.createElement("input"),
        descriptionItem = document.createElement("input"),
        dueDateItem = document.createElement("input"),
        priorityListItem = document.createElement("select"),
        optionPriorityOne = document.createElement("option"),
        optionPriorityTwo = document.createElement("option"),
        optionPriorityThree = document.createElement("option"),
        btnAñadir = document.createElement("input");

    titleAddItem.textContent = title;

    overlay.classList.add("overlay");
    popup.classList.add("popup");
    cerrarPopup.classList.add("cerrarPopup");
    fas.classList.add("fas", "fa-times");
    contenedorInputs.classList.add("contenedor-inputs");
    btnAñadir.classList.add("btn-añadir");

    btnAñadir.type = "button";
    btnAñadir.value = "Añadir";
    titleItem.type = "text";
    titleItem.placeholder = typeTitle;
    titleItem.setAttribute("id", "titleProject");
    descriptionItem.type = "text";
    descriptionItem.placeholder = "Añade una descripción";
    descriptionItem.setAttribute("id", "descriptionProject");
    dueDateItem.type = "date";
    dueDateItem.setAttribute("id", "dueDateProject");
    priorityListItem.name = "combo";
    priorityListItem.setAttribute("id", "priorityProjects");
    optionPriorityOne.value = "1";
    optionPriorityOne.textContent = "Prioridad: Alta";
    optionPriorityOne.setAttribute("id", "optionOneProject");
    optionPriorityTwo.value = "2";
    optionPriorityTwo.textContent = "Prioridad: Media";
    optionPriorityTwo.setAttribute("id", "optionTwoProject");
    optionPriorityThree.value = "3";
    optionPriorityThree.textContent = "Prioridad: Baja";
    optionPriorityThree.setAttribute("id", "optionThreeProject");

    priorityListItem.append(
        optionPriorityOne,
        optionPriorityTwo,
        optionPriorityThree
    );

    contenedorInputs.append(
        titleItem,
        descriptionItem,
        dueDateItem,
        priorityListItem
    );

    formAddItem.append(contenedorInputs, btnAñadir);
    cerrarPopup.appendChild(fas);
    popup.append(cerrarPopup, titleAddItem, formAddItem);
    overlay.appendChild(popup);
    main.appendChild(overlay);
}

//NOTE: Funciones constructoras para crear las cajas y añadir a las cajas correspondientes

function doTareas(
    title,
    description,
    date,
    priority,
    first = "#pendientesMain",
    second = "#realizadasMain"
) {
    const pendientesMain = document.querySelector(first),
        realizadosMain = document.querySelector(second);

    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

    let divMuestra = document.createElement("div"),
        titleMuestra = document.createElement("h3"),
        descripcionMuestra = document.createElement("p"),
        fechaMuestra = document.createElement("p"),
        deleteBox = document.createElement("input"),
        doyaBox = document.createElement("input");

    titleMuestra.textContent = this.title;
    descripcionMuestra.textContent = this.description;
    fechaMuestra.textContent = this.date;
    deleteBox.value = "Eliminar";
    deleteBox.type = "button";
    doyaBox.value = "Completado";
    doyaBox.type = "button";

    divMuestra.classList.add("muestra");
    deleteBox.classList.add("btnTareas", "delete");
    doyaBox.classList.add("btnTareas", "doya");

    if (this.priority == 1) {
        divMuestra.classList.add("one");
    } else if (this.priority == 2) {
        divMuestra.classList.add("two");
    } else {
        divMuestra.classList.add("three");
    }

    deleteBox.addEventListener("click", () => {
        divMuestra.remove();
    });

    doyaBox.addEventListener("click", () => {
        divMuestra.append(
            titleMuestra,
            descripcionMuestra,
            fechaMuestra,
            deleteBox,
            doyaBox
        );

        divMuestra.removeChild(doyaBox);
        realizadosMain.appendChild(divMuestra);

        tareasRealizadas.push(divMuestra);
        console.log(tareasRealizadas);
    });

    divMuestra.append(
        titleMuestra,
        descripcionMuestra,
        fechaMuestra,
        deleteBox,
        doyaBox
    );

    pendientesMain.appendChild(divMuestra);

    return divMuestra;
}

function doProjects(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

    const pendientesProjects = document.querySelector("#cajaPendientes"),
        realizadosProjects = document.querySelector("#cajaRealizados");

    let divMuestra = document.createElement("div"),
        titleMuestra = document.createElement("h3"),
        descripcionMuestra = document.createElement("p"),
        fechaMuestra = document.createElement("p"),
        deleteBox = document.createElement("input"),
        doyaBox = document.createElement("input");

    titleMuestra.textContent = this.title;
    descripcionMuestra.textContent = this.description;
    fechaMuestra.textContent = this.date;
    deleteBox.value = "Eliminar";
    deleteBox.type = "button";
    doyaBox.value = "Completado";
    doyaBox.type = "button";

    divMuestra.classList.add("muestra");
    deleteBox.classList.add("btnProjects", "delete");
    doyaBox.classList.add("btnProjects", "doya");

    if (this.priority == 1) {
        divMuestra.classList.add("one");
    } else if (this.priority == 2) {
        divMuestra.classList.add("two");
    } else {
        divMuestra.classList.add("three");
    }

    divMuestra.addEventListener("click", () => {
        doHeaderProjects(this.title, this.description);
    });

    deleteBox.addEventListener("click", () => {
        divMuestra.remove();
        if (main.childNodes[7]) {
            main.removeChild(main.childNodes[7]);
            main.removeChild(main.childNodes[6]);
            main.removeChild(main.childNodes[5]);
        }
    });

    doyaBox.addEventListener("click", () => {
        divMuestra.append(
            titleMuestra,
            descripcionMuestra,
            fechaMuestra,
            deleteBox,
            doyaBox
        );

        divMuestra.removeChild(doyaBox);
        realizadosProjects.appendChild(divMuestra);

        proyectosRealizados.push(divMuestra);
        console.log(proyectosRealizados);

        if (main.childNodes[7]) {
            main.removeChild(main.childNodes[7]);
            main.removeChild(main.childNodes[6]);
            main.removeChild(main.childNodes[5]);
        }
    });

    divMuestra.append(
        titleMuestra,
        descripcionMuestra,
        fechaMuestra,
        deleteBox,
        doyaBox
    );

    pendientesProjects.appendChild(divMuestra);
}

export { doFormItem, doTareas, doFormProjects, doProjects };
