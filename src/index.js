import "./style.css";
import { doHomePage } from "./home.js";
import doHeaderProjects from "./projects.js"; // Página de proyectos
import doFormItem from "./popups.js";

doHomePage();

const addItems = document.querySelector("#addItem");

addItems.addEventListener("click", () => {
    doFormItem();
    const cerrarPopup = document.querySelector(".cerrarPopup"),
        overlay = document.querySelector(".overlay"),
        popup = document.querySelector(".popup"),
        btnAñadir = document.querySelector(".btn-añadir"),
        titleItem = document.querySelector("#titleItem"),
        descriptionItem = document.querySelector("#descriptionItem"),
        dueDate = document.querySelector("#dueDate"),
        priorityListItem = document.querySelector("#priorityItem");

    overlay.classList.add("active");
    popup.classList.add("active");

    cerrarPopup.addEventListener("click", () => {
        overlay.classList.remove("active");
        popup.classList.remove("active");
    });

    btnAñadir.addEventListener("click", () => {
        console.log(
            titleItem.value,
            descriptionItem.value,
            dueDate.value,
            priorityListItem.value
        );
    });
});
