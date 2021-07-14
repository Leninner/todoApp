const main = document.querySelector(".main");

function doHeader() {
    let header = document.createElement("div"),
        titleHeader = document.createElement("h1");

    titleHeader.textContent = "TODO List";

    header.classList.add("header");

    header.appendChild(titleHeader);
    main.appendChild(header);
}

function doMainButtoms() {
    let divMainButtoms = document.createElement("div"),
        addItem = document.createElement("input"),
        addProject = document.createElement("input");

    addItem.type = "button";
    addItem.value = "Añadir Tarea";
    addItem.setAttribute("id", "addItem");
    addProject.type = "button";
    addProject.value = "Añadir Proyecto";
    addProject.setAttribute("id", "addProjects");

    divMainButtoms.classList.add("main-buttoms");

    divMainButtoms.append(addItem, addProject);
    main.appendChild(divMainButtoms);
}

function doBoxTodosMain() {
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
    wentMain.classList.add("boxesMain");
    boxTodosMain.classList.add("boxTodosMain");
    boxTask.classList.add("boxProjects");

    penMain.appendChild(titlePendiente);
    wentMain.appendChild(titleRealizado);
    boxTodosMain.append(penMain, wentMain);
    boxTask.append(titleTask, boxTodosMain);
    main.appendChild(boxTask);
}

function doBoxesProject() {
    let boxProjects = document.createElement("div"),
        titleProjects = document.createElement("h1"),
        upBoxProjects = document.createElement("div"),
        penProjects = document.createElement("div"),
        wentProjects = document.createElement("div");

    let titlePenProjects = document.createElement("h2"),
        titlewentProjects = document.createElement("h2");

    titleProjects.textContent = "Proyectos";
    titlePenProjects.textContent = "Proyectos Pendientes";
    titlewentProjects.textContent = "Proyectos Realizados";

    boxProjects.classList.add("boxProjects");
    upBoxProjects.classList.add("boxTodosMain");
    penProjects.classList.add("boxesMain");
    wentProjects.classList.add("boxesMain");

    penProjects.appendChild(titlePenProjects);
    wentProjects.appendChild(titlewentProjects);
    upBoxProjects.append(penProjects, wentProjects);
    boxProjects.append(titleProjects, upBoxProjects);
    main.appendChild(boxProjects);
}

function doHomePage() {
    doHeader();
    doMainButtoms();
    doBoxTodosMain();
    doBoxesProject();
}

export { doHomePage, doBoxTodosMain };
