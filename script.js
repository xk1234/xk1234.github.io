"use strict";
const techs = document.querySelector(".tech-row");
const selected = document.querySelector(".selected");
const imgselected = document.querySelector(".imgselected");
techs.addEventListener("click", (e) => {
    let target = e.target;
    if (e.target.tagName === "IMG") {
        selected.innerText = target.alt;
        
        imgselected.src = target.src;
    }
});
