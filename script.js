"use strict";
const display = document.querySelector(".teams-display");
const tabs = document.querySelector(".switch");
const rendercount = document.querySelector(".rendercount");
const total = document.querySelector(".totalcount");
const dropdown = document.querySelector(".dropdown");
const data = {
    teams: [
        {
            id: 1,
            name: "Axa",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
            description: "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
            campaigns_count: 20,
            leads_count: 1500,
            is_favorited: true,
            is_archived: false,
            created_at: "28 July 2018"
        },
        {
            id: 2,
            name: "Indeed - US",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
            description: "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
            campaigns_count: 15,
            leads_count: 7130,
            is_favorited: false,
            is_archived: false,
            created_at: "15 October 2018"
        },
        {
            id: 3,
            name: "Indeed - EU",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
            description: "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
            campaigns_count: 18,
            leads_count: 3500,
            is_favorited: false,
            is_archived: false,
            created_at: "1 October 2018"
        },
        {
            id: 4,
            name: "Workday - US",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
            description: "Workday Inc is an on demand financial management and human capital management something とかなんとか",
            campaigns_count: 16,
            leads_count: 2000,
            is_favorited: false,
            is_archived: false
        },
        ,
        {
            id: 5,
            name: "Workday - AU",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
            description: "Workday Inc is an on demand financial management and human capital management something とかなんとか",
            campaigns_count: 12,
            leads_count: 1500,
            is_favorited: false,
            is_archived: false
        },
        {
            id: 6,
            name: "Time",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143",
            description: "Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff",
            campaigns_count: 13,
            leads_count: 10000,
            is_favorited: true,
            is_archived: false
        },
        {
            id: 7,
            name: "Zendesk",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352",
            description: "Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess",
            campaigns_count: 17,
            leads_count: 1200,
            is_favorited: true,
            is_archived: false
        },
        {
            id: 8,
            name: "Uber",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240",
            description: "Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess",
            campaigns_count: 10,
            leads_count: 3200,
            is_favorited: false,
            is_archived: true
        },
        {
            id: 9,
            name: "Grab",
            image: "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655",
            description: "GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people",
            campaigns_count: 23,
            leads_count: 2000,
            is_favorited: false,
            is_archived: true
        }
    ],
    activities: [
        {
            id: 1,
            person: {
                id: 1,
                name: "Julie",
                avatar: "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
            },
            action: "increased_quota",
            target: "Indeed - US",
            created_at: "2 hours ago"
        },
        {
            id: 2,
            person: {
                id: 2,
                name: "Emily",
                avatar: "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
            },
            action: "added_leads",
            target: "Linkedin",
            created_at: "4 hours ago"
        },
        {
            id: 3,
            person: {
                id: 2,
                name: "Emily",
                avatar: "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
            },
            action: "archived_team",
            target: "Uber"
        },
        {
            id: 4,
            person: {
                id: 1,
                name: "Julie",
                avatar: "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
            },
            action: "archived_team",
            target: "Grab",
            created_at: "6 hours ago"
        },
        {
            id: 5,
            person: {
                id: 1,
                name: "Julie",
                avatar: "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
            },
            action: "added_leads",
            target: "Workday - AU",
            created_at: "2 hours ago"
        }
    ],
    current_user: {
        id: 4,
        name: "John",
        avatar: "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040",
        notifications_count: 5
    }
};
class Profile {
    constructor(id, name, imageurl, desc, campaigns, leads, is_favorited, is_archived, created_date) {
        this.id = id;
        this.name = name;
        this.imageurl = imageurl;
        this.desc = desc;
        this.campaigns = campaigns;
        this.leads = leads;
        this.is_favorited = is_favorited;
        this.is_archived = is_archived;
        this.created_date = created_date;
    }
    toggleFavorite() {
        this.is_favorited = !this.is_favorited;
    }
    toggleArchived() {
        this.is_archived = !this.is_archived;
    }
}
function processData(data) {
    let teams = [];
    data.teams.forEach((team) => {
        let newprofile = new Profile(team.id, team.name, team.image, team.description, team.campaigns_count, team.leads_count, team.is_favorited, team.is_archived, new Date(team.created_at));
        teams.push(newprofile);
    });
    return teams;
}
function render(list) {
    list.forEach((profile) => {
        let fill = profile.is_favorited ? "solid" : "regular";
        let teamsitem = document.createElement("div");
        teamsitem.classList.add("teams-item");
        teamsitem.innerHTML = `
        <div class="ti-top">
            <div class="ti-top-left">
                <div class="ti-stuff">
                    <img src="${profile.imageurl}" alt="${profile.name}" class="icon">
                    <div class="ti-info">
                        <p class="header">${profile.name}</p>
                        <small>Created on ${profile.created_date.toLocaleDateString()}</small>
                    </div>
                </div>
                <i class="fa-${fill} fa-star"></i>
            </div>
            <small>${profile.desc}</small>

        </div>
        <div class="ti-bottom">
            <p><i class="fa-solid fa-message"></i> ${profile.campaigns} campaigns</p>
            <p><i class="fa-solid fa-user"></i> ${profile.leads} leads</p>
        </div>`;
        display.append(teamsitem);
    });
    rendercount.innerText = list.length;
}
tabs.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        display.innerHTML = "";
        let active = document.querySelector(".switch .active");
        active.classList.remove("active");
        e.target.classList.add("active");
        console.log(e.target.innerText);
        if (e.target.innerText === "Favourites") {
            let newarr = allprofiles.filter((item) => item.is_favorited);
            render(newarr);
        }
        else if (e.target.innerText === "Archived") {
            let newarr = allprofiles.filter((item) => item.is_archived);
            render(newarr);
        }
        else {
            render(allprofiles);
        }
    }
});
dropdown.addEventListener("click", () => { });
let allprofiles = processData(data);
render(allprofiles);
total.innerText = data.teams.length.toString();
