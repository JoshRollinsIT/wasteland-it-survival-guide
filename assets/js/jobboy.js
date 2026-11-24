const pages = [

    "indexhome.html",

    "pages/special.html",
    "pages/interview-gauntlet.html",
    "pages/communication-perks.html",
    "pages/quest-log-management.html",
    "pages/surviving-the-team.html",
    "pages/conflict-encounters.html",
    "pages/status-effects.html",
    "pages/ada-emergency-kit.html",
    "pages/digital-reputation.html",
    "pages/endgame-advice.html"

];

let currentPage = 0;

const frame =
document.getElementById("jobboyFrame");

function loadPage(index){

    frame.src = pages[index];

}

const knob =
document.getElementById("twistKnob");

let rotation = 0;

frame.addEventListener("load", () => {

    try {

        frame.contentWindow.addEventListener(
    "scroll",
    () => {

        console.log("scroll detected");

        rotation =
        frame.contentWindow.scrollY;

        knob.style.transform =
        `rotate(${rotation}deg)`;

    }
);

    } catch(err) {

        console.log(err);

    }

});

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    if(currentPage < pages.length - 1){

        currentPage++;
        loadPage(currentPage);

    }

});

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    if(currentPage > 0){

        currentPage--;
        loadPage(currentPage);

    }

});

document
.getElementById("homeBtn")
.addEventListener("click", () => {

    currentPage = 0;
    loadPage(currentPage);

});

