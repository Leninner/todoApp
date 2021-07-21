const main = document.querySelector(".main");

function doHeaderProjects(title, description) {
    let contenedorInfo = document.createElement("div"),
        contenedorTitle = document.createElement("div"),
        contenedorButtoms = document.createElement("div");

    let titleInfo = document.createElement("h1"),
        parrafoInfo = document.createElement("p");

    let completadoButtom = document.createElement("input"),
        returnButtom = document.createElement("input");

    completadoButtom.type = "button";
    completadoButtom.value = "Completado";
    returnButtom.type = "button";
    returnButtom.value = "Volver";

    contenedorButtoms.classList.add("main-buttoms");

    titleInfo.textContent = title;
    parrafoInfo.textContent = description;

    contenedorButtoms.classList.add("buttoms");
    contenedorTitle.classList.add("titleProjects");
    parrafoInfo.classList.add("cajaProyectos");

    contenedorButtoms.append(completadoButtom, returnButtom);
    contenedorTitle.append(titleInfo, contenedorButtoms);
    contenedorInfo.append(contenedorTitle, parrafoInfo);

    main.appendChild(contenedorInfo);

    doFormulario();
    doButtom();
    doBox();
}

function doButtom() {
    let divButtom = document.createElement("div"),
        buttonAddProjects = document.createElement("input");

    buttonAddProjects.value = "Añadir";
    buttonAddProjects.type = "button";
    buttonAddProjects.setAttribute("id", "botonh");

    divButtom.classList.add("main-buttoms", "btnProyectos");

    buttonAddProjects.addEventListener("click", () => {
        eventsController();
    });

    divButtom.appendChild(buttonAddProjects);
    main.appendChild(divButtom);
}

function eventsController() {
    const overlay = document.querySelector(".pendientes"),
        popup = document.querySelector(".popupPendiente"),
        cerrarPendientes = document.querySelector(".cerrarPendientes"),
        btnPorqui = document.querySelector(".btnPorqui");

    overlay.classList.add("active");
    popup.classList.add("active");

    cerrarPendientes.addEventListener("click", () => {
        overlay.classList.remove("active");
        popup.classList.remove("active");
    });

    btnPorqui.addEventListener("click", () => {
        overlay.classList.remove("active");
        popup.classList.remove("active");
        alert("Este botón es demasiado cool!");
    });
}

function doBox() {
    let boxTask = document.createElement("div"),
        titleTask = document.createElement("h1"),
        boxTodosMain = document.createElement("div"),
        penMain = document.createElement("div"),
        wentMain = document.createElement("div");

    let titlePendiente = document.createElement("h2"),
        titleRealizado = document.createElement("h2");

    titlePendiente.textContent = "Pendiente";
    titleRealizado.textContent = "Realizado";
    titleTask.textContent = "Tareas";

    penMain.classList.add("boxesMain");
    penMain.setAttribute("id", "proyectosPendientes");
    wentMain.classList.add("boxesMain");
    wentMain.setAttribute("id", "proyectosRealizados");
    boxTodosMain.classList.add("boxTodosMain");
    boxTask.classList.add("boxProjects");

    penMain.appendChild(titlePendiente);
    wentMain.appendChild(titleRealizado);
    boxTodosMain.append(penMain, wentMain);
    boxTask.append(titleTask, boxTodosMain);
    main.appendChild(boxTask);
}

function doFormulario() {
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

    titleAddItem.textContent = "Añado Chistes";

    overlay.classList.add("overlay", "pendientes");
    popup.classList.add("popup", "popupPendiente");
    cerrarPopup.classList.add("cerrarPopup", "cerrarPendientes");
    fas.classList.add("fas", "fa-times");
    contenedorInputs.classList.add("contenedor-inputs");
    btnAñadir.classList.add("btn-añadir", "btnPorqui");

    btnAñadir.type = "button";
    btnAñadir.value = "Añadir";
    titleItem.type = "text";
    titleItem.placeholder = "typeTitle";
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

export default doHeaderProjects;
