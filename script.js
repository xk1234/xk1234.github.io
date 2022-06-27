"use strict";
const techs = document.querySelector(".tech-row");
const selected = document.querySelector(".selected");
techs.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        selected.innerText = e.target.alt;
    }
});
