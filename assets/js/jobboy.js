const pages = [

    "indexhome.html",

    "pages/career-assessment.html",
    "pages/special.html",
    "pages/interview-gauntlet.html",
    "pages/communication-perks.html",
    "pages/quest-log-management.html",
    "pages/surviving-the-team.html",
    "pages/conflict-encounters.html",
    "pages/status-effects.html",
    "pages/ada-emergency-kit.html",
    "pages/digital-reputation.html",
    "pages/endgame-advice.html",
    "pages/final-assessment.html"

];

let currentPage = 0;

const frame =
document.getElementById("jobboyFrame");

function loadPage(index){

    frame.src = pages[index];

    setTimeout(() => {

        refreshHeaderStats();

        refreshProgressDisplay();

    }, 250);

}

function refreshHeaderStats() {

    const data =
    JSON.parse(
        localStorage.getItem(
            "jobBoyTotals"
        )
    );

    if(!data) return;

    const setStat = (id,value) => {

        const element =
        document.getElementById(id);

        if(element){

            element.textContent =
            value;

        }

    };

    setStat(
        "stat-communication",
        data.communication
    );

    setStat(
        "stat-teamwork",
        data.teamwork
    );

    setStat(
        "stat-leadership",
        data.leadership
    );

    setStat(
        "stat-organization",
        data.organization
    );

    setStat(
        "stat-professionalism",
        data.professionalism
    );

    setStat(
        "stat-learning",
        data.learning
    );

    setStat(
        "stat-adaptability",
        data.adaptability
    );

}

/* ===================================== */
/* PROGRESS */
/* ===================================== */
function refreshProgressDisplay() {

    const progress =

    parseInt(

        localStorage.getItem(
            "jobBoyProgress"
        )

    ) || 0;

    const text =

    document.getElementById(
        "case-progress"
    );

    const fill =

    document.getElementById(
        "progress-fill"
    );

    if(text){

        text.textContent =
        progress + "%";

    }

    if(fill){

    fill.style.width =
    progress + "%";

    if(progress < 33){

        fill.style.background =
        "#ff8800";

    }

    else if(progress < 66){

        fill.style.background =
        "#ffcc00";

    }

    else {

        fill.style.background =
        "#00ff66";

    }

}

}

const knob =
document.getElementById("twistKnob");

let rotation = 0;
let lastTickStep = 0;

function spinKnob(degrees) {
    rotation += degrees;
    if (knob) {
        knob.style.transform = `rotate(${rotation}deg)`;
    }
}

function playControlSound() {
    if (window.JobBoySounds) {
        JobBoySounds.click();
    }
}

frame.addEventListener("load", () => {

    // New page: reset the tick counter. The dial itself is
    // left where it is until the user scrolls the new page,
    // so the Prev/Home/Next spin below is visible.
    lastTickStep = 0;

    try {

        const win = frame.contentWindow;
        const doc = frame.contentDocument || win.document;

        const onScroll = () => {

            const maxScroll = Math.max(1,
                doc.documentElement.scrollHeight - win.innerHeight);

            const fraction = Math.min(1, Math.max(0,
                win.scrollY / maxScroll));

            // 0 -> 540 degrees, top to bottom of the page.
            rotation = fraction * 540;

            if (knob) {
                knob.style.transform = `rotate(${rotation}deg)`;
            }

            // One quiet tick every 45 degrees.
            const step = Math.floor(rotation / 45);
            if (step !== lastTickStep) {
                lastTickStep = step;
                if (window.JobBoySounds) {
                    JobBoySounds.tick();
                }
            }

        };

        win.addEventListener("scroll", onScroll, { passive: true });
        // Some browsers fire scroll on the document, not the
        // window, inside an iframe — listen to both.
        doc.addEventListener("scroll", onScroll, true);

    } catch(err) {

        console.log(err);

    }

});

document
.getElementById("nextBtn")
.addEventListener("click", () => {

    if(currentPage < pages.length - 1){

        playControlSound();
        spinKnob(120);
        currentPage++;
        loadPage(currentPage);

    }

});

document
.getElementById("prevBtn")
.addEventListener("click", () => {

    if(currentPage > 0){

        playControlSound();
        spinKnob(-120);
        currentPage--;
        loadPage(currentPage);

    }

});

document
.getElementById("homeBtn")
.addEventListener("click", () => {

    playControlSound();
    spinKnob(120);
    currentPage = 0;
    loadPage(currentPage);

});


loadPage(0);

refreshHeaderStats();
refreshProgressDisplay();



