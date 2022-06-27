const techs: HTMLDivElement = document.querySelector(".tech-row")!;
const selected: HTMLSpanElement = document.querySelector(".selected")!;
const imgselected: HTMLImageElement = document.querySelector(".imgselected")!;

techs.addEventListener("click", (e) => {
  let target = e.target! as HTMLImageElement;
  if ((<HTMLImageElement>e.target!).tagName === "IMG") {
    selected.innerText = target.alt;
    alert(selected)
    imgselected.src = target.src;
  }
});
