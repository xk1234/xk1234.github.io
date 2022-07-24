const techs: HTMLDivElement = document.querySelector(".tech-row")!;
const selected: HTMLSpanElement = document.querySelector(".selected")!;
const imgselected: HTMLImageElement = document.querySelector(".imgselected")!;
const github: HTMLDivElement = document.querySelector(".github-content")!;

interface alltech {
  [tech: string]: string;
}

const techdesc = {
  TypeScript:
    "I started learning TypeScript in mid-2022 and am now able to write all my JS code in TS, preventing a substantial number of errors. I am familiar with both the TS syntax as well as TS debugging and TS configuration",
  JavaScript:
    "I have a solid conceptual understanding of the key vanilla JS principles including closures, scopes, OOP in JS, DOM manipulation, and async JS",
  GraphQL:
    "I understand how HTTP and its different components work and am able to use JS to modify headers and body. I have worked with both REST and GraphQL on the client side",
  HTML: "I understand the majority of the commonly used HTML principles well and have some knowledge of web accessibility",
  CSS: "I fundamentally understand the basic principles of CSS including the box model, responsiveness, etc, and have utilized these principles to make my projects responsive",
  Figma:
    "I started using Figma in 2021 and have become proficient in most basic features, including components, auto-layouts, creating styles, etc",
  Django:
    "I have a good understanding of how to use the Django web framework to build common backend services like authentication, request handling, form validation, etc",
  React:
    "I have in depth knowledge behind key React principles, including render/re-render cycles, building reusable components, custom hooks, etc. I have also successfully integrated my React apps with a variety of libraries such as react-router, react-markdown, supabase, and more",
  NextJS:
    "I have not created any projects with NextJS but am familiar and am able to use its main features including SEO, server side rendering, and pages",
  Supabase:
    "My knowledge of Supabase is limited for now, but I am able to use it for basic use cases such as authentication, data fetching, and updating data",
};

techs.addEventListener("click", (e) => {
  let target = e.target! as HTMLImageElement;
  if ((<HTMLImageElement>e.target!).tagName === "IMG") {
    let paradesc: HTMLParagraphElement =
      document.querySelector(".tech-main p")!;
    selected.innerText = target.alt;
    imgselected.src = target.src;
    for (let item of techs.children) {
      item.classList.remove("selected");
    }
    paradesc.innerText = techdesc[target.alt];
    target.classList.add("selected");
  }
});

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + ampm;
  return strTime;
}

function process(data: any) {
  let counter = 0;
  const month: string[] = [
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
    let logo: string = d.committer.avatar_url;
    let date = new Date(d.commit.committer.date);
    let message = d.commit.message;

    let commit = document.createElement("div");
    commit.classList.add("github-commit");
    commit.innerHTML = `
        <img src="${logo}" alt="${message}" class="profilepic">
            <div class="commit-info">
              <p class="title">Personal Website</p>
              <p>${message}
              <span class="badge">${
                month[date.getMonth()]
              } ${date.getDate()}</span><span class="badge">${formatAMPM(
      date
    )}</span>
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
  let url: string =
    "https://api.github.com/repos/xk1234/xk1234.github.io/commits";

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
