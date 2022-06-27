const techs: HTMLDivElement = document.querySelector(".tech-row")!;
const selected: HTMLSpanElement = document.querySelector(".selected")!;

techs.addEventListener("click", (e) => {
  if (e.target!.tagName === "IMG") {
    selected.innerText = e.target!.alt;
  }
});
