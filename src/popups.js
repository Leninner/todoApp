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
        optionPriorityThree = document.createElement("option");

    //         <select name="combo">
    //     <!-- Opciones de la lista -->
    //     <option value="1">Opción 1</option>
    //     <option value="2" selected>Opción 2</option> <!-- Opción por defecto -->
    //     <option value="3">Opción 3</option>
    //   </select>

    overlay.classList.add("overlay");
    popup.classList.add("popup");
    cerrarPopup.classList.add("cerrarPopup");
    fas.classList.add("fas fa-times");
    formAddItem.action = "";
    contenedorInputs.classList.add("contenedor-inputs");

    titleItem.type = "text";
    titleItem.placeholder = "Tarea";
    descriptionItem.type = "text";
    descriptionItem.placeholder = "Añade una descripción";
    dueDateItem.type = "date";
    priorityListItem.name = "combo";
    optionPriorityOne.value = "1";
    optionPriorityOne.textContent = "Opción 1";
    optionPriorityTwo.value = "2";
    optionPriorityTwo.textContent = "Opción 2";
    optionPriorityThree.value = "3";
    optionPriorityThree.textContent = "Opción 3";
}

/* <div class="overlay">
            <!-- Formulario -->
            <div class="popup">
                <div class="cerrarPopup"><i class="fas fa-times"></i></div>
                <h3>Añade Un Nuevo Libro</h3>
                <h4>Y Sigue Soñando</h4>
                <form action="">
                    <div class="contenedor-inputs">
                        <input type="text" placeholder="Nombre del Libro" id="title">
                        <input type="text" placeholder="Autor del Libro" id="author">
                        <input type="number" placeholder="Año de Publicación" id="year">
                        <input type="number" placeholder="Número de Páginas" id="pages">
                        <h4>¿Ya Lo Leíste?</h4>
                        <input id="check" type="checkbox">
                    </div>
                    <input type="button" class="btn-añadir" value="Añadir">
                </form>
            </div>
        </div> */
