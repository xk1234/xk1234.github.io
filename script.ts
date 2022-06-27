const techs: HTMLDivElement = document.querySelector(".tech-row")!;
const selected: HTMLSpanElement = document.querySelector(".selected")!;
const imgselected: HTMLImageElement = document.querySelector(".imgselected")!;
const github: HTMLDivElement = document.querySelector(".github-content")!;

techs.addEventListener("click", (e) => {
  let target = e.target! as HTMLImageElement;
  if ((<HTMLImageElement>e.target!).tagName === "IMG") {
    selected.innerText = target.alt;
    alert(selected);
    imgselected.src = target.src;
  }
});

function formatAMPM(date: Date) {
    let hours = date.getHours();
    let minutes: string|number = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ampm;
    return strTime;
  }

function process(data: any) {
    let counter = 0;
    const month: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    data.forEach(d =>{
        let logo: string = d.committer.avatar_url
        let date = new Date(d.commit.committer.date)
        let message = d.commit.message

        let commit = document.createElement('div')
        commit.classList.add('github-commit')
        commit.innerHTML = `
        <img src="${logo}" alt="${message}" class="profilepic">
            <div class="commit-info">
              <p class="title">Personal Website</p>
              <p>${message}<span class="badge">${month[date.getMonth()]} ${date.getDate()}</span><span class="badge">${formatAMPM(date)}</span></p>
            </div>
        `
        if (counter < 5) {
            github.append(commit)
        }
        counter++;
    })

}

function generateData() {
  let url: string = "https://api.github.com/repos/xk1234/xk1234.github.io/commits";
  let options = {
      headers: {
        Authorization: "token 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"
      }
  }

  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        process(data)
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

generateData();
