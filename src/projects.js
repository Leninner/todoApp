const main = document.querySelector(".main");

function doHeaderProjects(title, description) {
    const realizadosProjects = document.querySelector("#cajaRealizados"),
        divMuestra = document.querySelector(".muestra"),
        doyaBox = document.querySelector(".doya");

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

    completadoButtom.addEventListener("click", () => {
        divMuestra.removeChild(doyaBox);
        realizadosProjects.appendChild(divMuestra);
        main.removeChild(main.childNodes[7]);
        main.removeChild(main.childNodes[6]);
        main.removeChild(main.childNodes[5]);
    });

    returnButtom.addEventListener("click", () => {
        main.removeChild(main.childNodes[7]);
        main.removeChild(main.childNodes[6]);
        main.removeChild(main.childNodes[5]);
    });

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

    doButtom();
    doBox();
    addTaskToProjects();
}

function doButtom() {
    let divButtom = document.createElement("div"),
        buttonAddProjects = document.createElement("input");

    buttonAddProjects.value = "Añadir";
    buttonAddProjects.type = "button";
    buttonAddProjects.setAttribute("id", "botonh");

    divButtom.classList.add("main-buttoms", "btnProyectos");

    divButtom.appendChild(buttonAddProjects);
    main.appendChild(divButtom);
}

function addTaskToProjects() {
    const btn = document.querySelector("#botonh");

    btn.addEventListener("click", () => {
        //NOTE: Condicional para eliminar el problema de cajas repetidas
        // El problema de las cajas repetidas se daba principalmente porque en se creaba 2 formularios al dar click en añadir; esto sucedía después de la primera iteración

        if (main.childNodes[8]) {
            main.removeChild(main.childNodes[8]);
        }

        doFormulario();
        eventsController();
    });
}

function eventsController() {
    let overlay = document.querySelector(".pendientes"),
        popup = document.querySelector(".popupPendiente"),
        cerrarPendientes = document.querySelector(".cerrarPendientes"),
        btnPorqui = document.querySelector(".btnPorqui");

    overlay.classList.add("active");
    popup.classList.add("active");

    let titleItem = document.querySelector("#titleProjects"),
        descriptionItem = document.querySelector("#descriptionProjects"),
        dueDateItem = document.querySelector("#dueDateProjects"),
        priorityListItem = document.querySelector("#priorityProjectss");

    cerrarPendientes.addEventListener("click", () => {
        overlay.classList.remove("active");
        popup.classList.remove("active");
    });

    btnPorqui.addEventListener("click", () => {
        console.log(main.childNodes);

        if (
            titleItem.value == "" ||
            descriptionItem.value == "" ||
            dueDateItem.value == ""
        ) {
            alert("Llena todos los campos por favor");
        } else {
            overlay.classList.remove("active");
            popup.classList.remove("active");

            let task = new taskOfProjects(
                titleItem.value,
                descriptionItem.value,
                dueDateItem.value,
                priorityListItem.value
            );

            createElements(
                task.title,
                task.description,
                task.date,
                task.priority
            );
        }

        overlay.classList.remove("active");
        popup.classList.remove("active");
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

    titleAddItem.textContent = "Añadir Tareas";

    overlay.classList.add("overlay", "pendientes");
    popup.classList.add("popup", "popupPendiente");
    cerrarPopup.classList.add("cerrarPopup", "cerrarPendientes");
    fas.classList.add("fas", "fa-times");
    contenedorInputs.classList.add("contenedor-inputs");
    btnAñadir.classList.add("btn-añadir", "btnPorqui");

    btnAñadir.type = "button";
    btnAñadir.value = "Añadir";
    titleItem.type = "text";
    titleItem.placeholder = "Nombre de la Tarea";
    titleItem.setAttribute("id", "titleProjects");
    descriptionItem.type = "text";
    descriptionItem.placeholder = "Añade una descripción";
    descriptionItem.setAttribute("id", "descriptionProjects");
    dueDateItem.type = "date";
    dueDateItem.setAttribute("id", "dueDateProjects");
    priorityListItem.name = "combo";
    priorityListItem.setAttribute("id", "priorityProjectss");
    optionPriorityOne.value = "1";
    optionPriorityOne.textContent = "Prioridad: Alta";
    optionPriorityTwo.value = "2";
    optionPriorityTwo.textContent = "Prioridad: Media";
    optionPriorityThree.value = "3";
    optionPriorityThree.textContent = "Prioridad: Baja";

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

function taskOfProjects(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}

function createElements(title, description, date, priority) {
    const pendientesMain = document.querySelector("#proyectosPendientes"),
        realizadosMain = document.querySelector("#proyectosRealizados");

    let divMuestra = document.createElement("div"),
        titleMuestra = document.createElement("h3"),
        descripcionMuestra = document.createElement("p"),
        fechaMuestra = document.createElement("p"),
        deleteBox = document.createElement("input"),
        doyaBox = document.createElement("input");

    titleMuestra.textContent = title;
    descripcionMuestra.textContent = description;
    fechaMuestra.textContent = date;
    deleteBox.value = "Eliminar";
    deleteBox.type = "button";
    doyaBox.value = "Completado";
    doyaBox.type = "button";

    divMuestra.classList.add("muestra");
    deleteBox.classList.add("btnTareas", "delete");
    doyaBox.classList.add("btnTareas", "doya");

    if (priority == 1) {
        divMuestra.classList.add("one");
    } else if (priority == 2) {
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

export default doHeaderProjects;
