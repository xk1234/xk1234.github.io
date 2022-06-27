"use strict";
const techs = document.querySelector(".tech-row");
const selected = document.querySelector(".selected");
const imgselected = document.querySelector(".imgselected");
const github = document.querySelector(".github-content");
techs.addEventListener("click", (e) => {
    let target = e.target;
    if (e.target.tagName === "IMG") {
        selected.innerText = target.alt;
        imgselected.src = target.src;
        for (let item of techs.children) {
            item.classList.remove("selected");
        }
        target.classList.add("selected");
    }
});
function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + ampm;
    return strTime;
}
function process(data) {
    let counter = 0;
    const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    data.forEach((d) => {
        let logo = d.committer.avatar_url;
        let date = new Date(d.commit.committer.date);
        let message = d.commit.message;
        let commit = document.createElement("div");
        commit.classList.add("github-commit");
        commit.innerHTML = `
        <img src="${logo}" alt="${message}" class="profilepic">
            <div class="commit-info">
              <p class="title">Personal Website</p>
              <p>${message}
              <span class="badge">${month[date.getMonth()]} ${date.getDate()}</span><span class="badge">${formatAMPM(date)}</span>
              </p>
            </div>
        `;
        if (counter < 5) {
            github.append(commit);
        }
        counter++;
    });
}
function generateData() {
    let url = "https://api.github.com/repos/xk1234/xk1234.github.io/commits";
    fetch(url)
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log(data);
        process(data);
    })
        .catch((err) => {
        console.log(err);
    });
}
generateData();
