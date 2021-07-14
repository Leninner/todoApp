const main = document.querySelector(".main");

function doFormItem() {
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

    titleAddItem.textContent = "Añadir Nueva Tarea";

    overlay.classList.add("overlay");
    popup.classList.add("popup");
    cerrarPopup.classList.add("cerrarPopup");
    fas.classList.add("fas", "fa-times");
    formAddItem.action = "";
    contenedorInputs.classList.add("contenedor-inputs");
    btnAñadir.classList.add("btn-añadir");

    btnAñadir.type = "button";
    btnAñadir.value = "Añadir";
    titleItem.type = "text";
    titleItem.placeholder = "Tarea";
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

function doTareas(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}

export { doFormItem, doTareas };
