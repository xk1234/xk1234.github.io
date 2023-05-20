var techs = document.querySelector(".tech-row");
var selected = document.querySelector(".selected");
var imgselected = document.querySelector(".imgselected");
var github = document.querySelector(".github-content");
var techdesc = {
    TypeScript: "I started learning TypeScript in mid-2022 and am now able to write all my JS code in TS, preventing a substantial number of errors. I am familiar with both the TS syntax as well as TS debugging and TS configuration",
    JavaScript: "I have a solid conceptual understanding of the key vanilla JS principles including closures, scopes, OOP in JS, DOM manipulation, and async JS",
    HTML: "I understand the majority of the commonly used HTML principles well and have some knowledge of web accessibility",
    CSS: "I fundamentally understand the basic principles of CSS including the box model, responsiveness, etc, and have utilized these principles to make my projects responsive",
    React: "I have in depth knowledge behind key React principles, including render/re-render cycles, building reusable components, custom hooks, etc. I have also successfully integrated my React apps with a variety of libraries such as react-router, react-markdown, supabase, and more",
    C: "I have a good understanding of low-level programming in C, including memory management, pointers, and the use of libraries. I have written a full Unix C shell in C and added a feature to Memcached, a 50k LOC production key value store",
    Cpp: "I have solid experience C++ and am familiar with the STL library",
    Python: "I have used Python extensively for data analysis as well as web scraping. I am familiar with libraries such as Pandas, NumPy, Matplotlib and Selenium",
    Jupyter: "I am proficient in using Jupyter notebooks for data exploration and analysis. I can create readable notebooks with clear, organized documentation and visualizations",
    Git: "I have experience with Git and Github for version control. I can use branching, merging, and rebasing to manage code changes effectively"
};
techs.addEventListener("click", function (e) {
    var target = e.target;
    if (e.target.tagName === "IMG") {
        var paradesc = document.querySelector(".tech-main p");
        selected.innerText = target.alt;
        imgselected.src = target.src;
        for (var i = 0; i < techs.children.length; i++) {
            var item = techs.children[i];
            item.classList.remove("selected");
        }
        paradesc.innerText = techdesc[target.alt];
        target.classList.add("selected");
    }
});
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ampm;
    return strTime;
}
function process(data) {
    var counter = 0;
    var month = [
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
    data.forEach(function (d) {
        var logo = d.committer.avatar_url;
        var date = new Date(d.commit.committer.date);
        var message = d.commit.message;
        var commit = document.createElement("div");
        commit.classList.add("github-commit");
        commit.innerHTML = "\n        <img src=\"".concat(logo, "\" alt=\"").concat(message, "\" class=\"profilepic\">\n            <div class=\"commit-info\">\n              <p class=\"title\">Personal Website</p>\n              <p>").concat(message, "\n              <span class=\"badge\">").concat(month[date.getMonth()], " ").concat(date.getDate(), "</span><span class=\"badge\">").concat(formatAMPM(date), "</span>\n              </p>\n            </div>\n        ");
        if (counter < 5) {
            github.append(commit);
        }
        counter++;
    });
}
function generateData() {
    var url = "https://api.github.com/repos/xk1234/xk1234.github.io/commits";
    fetch(url)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
        process(data);
    })["catch"](function (err) {
        console.log(err);
    });
}
generateData();
