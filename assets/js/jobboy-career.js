/* ===================================== */
/* JOB-BOY CAREER SYSTEM */
/* ===================================== */


/* ===================================== */
/* The Perk Database */
/* ===================================== */

const PERKS = {

    /* Interview */

professionalPresence: {
  name: "Professional Presence",
  category: "interview",
  stats: {
    professionalism: 3,
    communication: 1
  }
},

curiousLearner: {
  name: "Curious Learner",
  category: "interview",
  stats: {
    adaptability: 3,
    learning: 1
  }
},

preparationExpert: {
  name: "Preparation Expert",
  category: "interview",
  stats: {
    organization: 3,
    professionalism: 1
  }
},

/* Communication */

emailMaster: {
  name: "Email Master",
  category: "communication",
  stats: {
    communication: 3,
    organization: 1
  }
},

activeListener: {
  name: "Active Listener",
  category: "communication",
  stats: {
    communication: 2,
    teamwork: 2
  }
},

professionalCommunicator: {
  name: "Professional Communicator",
  category: "communication",
  stats: {
    communication: 2,
    leadership: 2
  }
},

/* Quest Log */

priorityMaster: {
  name: "Priority Master",
  category: "quest",
  stats: {
    organization: 3,
    professionalism: 1
  }
},

documentationSpecialist: {
  name: "Documentation Specialist",
  category: "quest",
  stats: {
    organization: 2,
    communication: 2
  }
},

timekeeper: {
  name: "Timekeeper",
  category: "quest",
  stats: {
    organization: 2,
    professionalism: 2
  }
},

/* Team */

reliableAlly: {
  name: "Reliable Ally",
  category: "team",
  stats: {
    teamwork: 3,
    professionalism: 1
  }
},

knowledgeSharer: {
  name: "Knowledge Sharer",
  category: "team",
  stats: {
    teamwork: 2,
    communication: 2
  }
},

professionalNetworker: {
  name: "Professional Networker",
  category: "team",
  stats: {
    communication: 2,
    leadership: 2
  }
},

/* Conflict */

engagedListener: {
  name: "Engaged Listener",
  category: "conflict",
  stats: {
    teamwork: 2,
    communication: 2
  }
},

professionalMediator: {
  name: "Professional Communicator",
  category: "conflict",
  stats: {
    leadership: 2,
    communication: 2
  }
},

conflictResolver: {
  name: "Conflict Resolver",
  category: "conflict",
  stats: {
    leadership: 2,
    teamwork: 2
  }
},

/* Status Effects */

positiveMindset: {
  name: "Positive Mindset",
  category: "status",
  stats: {
    adaptability: 2,
    teamwork: 2
  }
},

workLifeBalance: {
  name: "Work-Life Balance",
  category: "status",
  stats: {
    professionalism: 2,
    adaptability: 2
  }
},

continuousLearning: {
  name: "Continuous Learning",
  category: "status",
  stats: {
    learning: 3,
    adaptability: 1
  }
},

/* ADA */

selfAdvocate: {
  name: "Self-Advocate",
  category: "ada",
  stats: {
    communication: 2,
    professionalism: 2
  }
},

preparedProfessional: {
  name: "Prepared Professional",
  category: "ada",
  stats: {
    organization: 2,
    professionalism: 2
  }
},

barrierBuster: {
  name: "Barrier Buster",
  category: "ada",
  stats: {
    adaptability: 2,
    leadership: 2
  }
},

/* Digital Reputation */

networkBuilder: {
  name: "Network Builder",
  category: "reputation",
  stats: {
    communication: 2,
    leadership: 2
  }
},

knowledgeExplorer: {
  name: "Knowledge Explorer",
  category: "reputation",
  stats: {
    learning: 3,
    adaptability: 1
  }
},

opportunityFinder: {
  name: "Opportunity Finder",
  category: "reputation",
  stats: {
    adaptability: 2,
    leadership: 2
  }
},

/* End Game */

expertCommunicator: {
  name: "Expert Communicator",
  category: "endgame",
  stats: {
    communication: 3,
    professionalism:3,
    leadership: 1
  }
},

teamBuilder: {
  name: "Team Builder",
  category: "endgame",
  stats: {
    teamwork: 3,
    leadership: 3,
    communication: 1
  }
},

adaptableLearner: {
  name: "Adaptable Learner",
  category: "endgame",
  stats: {
    learning: 3,
    adaptability: 3,
    organization: 1
  }
},

resilientSurvivor: {
  name: "Resilient Survivor",
  category: "endgame",
  stats: {
    adaptability: 3,
    professionalism: 3,
    teamwork: 1
  }
},


};

/* ===================================== */
/* Achievement Database */
/* ===================================== */

const ACHIEVEMENTS = {

    interview: {

        name: "Professional Apprentice",

        stats: {

            professionalism: 2,
            communication: 2,
            learning: 1

        }

    },

    communication: {

        name: "Silver Tongue Technician",

        stats: {

            communication: 3,
            teamwork: 2,
            professionalism: 1

        }

    },

    quest: {

        name: "Quest Commander",

        stats: {

            organization: 3,
            professionalism: 2,
            leadership: 1

        }

    },

    team: {

        name: "Trusted Team Member",

        stats: {

            teamwork: 3,
            professionalism: 2,
            leadership: 1

        }

    },

    conflict: {

        name: "Conflict Resolver",

        stats: {

            leadership: 3,
            teamwork: 2,
            communication: 1

        }

    },

    status: {

        name: "Resilient Survivor",

        stats: {

            adaptability: 3,
            professionalism: 2,
            learning: 1

        }

    },

    ada: {

        name: "Prepared Survivor",

        stats: {

            professionalism: 3,
            communication: 2,
            organization: 1

        }

    },

    reputation: {

        name: "Wasteland Influencer",

        stats: {

            communication: 3,
            leadership: 2,
            learning: 1

        }

    },

    endgame: {

        name: "Workplace Survivor",

        stats: {

            adaptability: 3,
            professionalism: 3,
            leadership: 2,
            communication: 2

        }

    }

};

/* ===================================== */
/* Achievement Claim */
/* ===================================== */

function claimAchievement(id) {

    const key =
    "achievement_" + id;

    if(localStorage.getItem(key)){

        return;

    }

    localStorage.setItem(
        key,
        "claimed"
    );

    if (window.JobBoySounds) {
        JobBoySounds.achievement();
    }
    updateJobBoyStats();

}

/* ===================================== */
/* Perk Selection */
/* ===================================== */

document
.addEventListener(
"DOMContentLoaded",
() => {

    document
    .querySelectorAll(".perk-card")
    .forEach(card => {

        const category =
        card.dataset.category;

        const perk =
        card.dataset.perk;

        const saved =
        localStorage.getItem(category);

        if(saved === perk){

            card.classList.add(
                "perk-selected"
            );

        }

        card.addEventListener(
        "click",
        () => {

            const alreadySelected =
        (localStorage.getItem(category) === perk);

            document
            .querySelectorAll(
                `.perk-card[data-category="${category}"]`
            )
            .forEach(c => {

                c.classList.remove(
                    "perk-selected"
                );

            });

            card.classList.add(
                "perk-selected"
            );

            localStorage.setItem(
                category,
                perk
            );

            if (!alreadySelected && window.JobBoySounds) {
                JobBoySounds.perk();
            }

            updateJobBoyStats();
            updateProgress();

        });

    });

    /* Achievements */

    document
.querySelectorAll(".promotion")
.forEach(card => {

    const achievement =

    card.dataset.achievement;

    const key =

    "achievement_" +
    achievement;

    if(

        localStorage.getItem(key)

    ){

        card.classList.add(
            "achievement-claimed"
        );

    }

    card.addEventListener(
        "click",
        () => {

            if(

                !localStorage.getItem(key)

            ){

                localStorage.setItem(
                    key,
                    "claimed"
                );

                if (window.JobBoySounds) {
                    JobBoySounds.achievement();
                }

                card.classList.add(
                    "achievement-claimed"
                );

                updateJobBoyStats();

                updateProgress();

            }

        }
    );

});

});

/* ===================================== */
/* PROGRESS */
/* ===================================== */

function updateProgress() {

    let completed = 0;

    const categories = [

        "interview",
        "communication",
        "quest",
        "team",
        "conflict",
        "status",
        "ada",
        "reputation",
        "endgame"

    ];

    categories.forEach(category => {

        if(localStorage.getItem(category)){

            completed++;

        }

        if(
            localStorage.getItem(
                "achievement_" + category
            )
        ){

            completed++;

        }

    });

    const total = 18;

    const percent = Math.round(
        (completed / total) * 100
    );

    localStorage.setItem(
        "jobBoyProgress",
        percent
    );

}

/* ===================================== */
/* Save Selection */
/* ===================================== */

function selectPerk(category, perkId) {

 localStorage.setItem(
     category,
     perkId
 );
    if (window.JobBoySounds) {
        JobBoySounds.perk();
    }

    alert(
        PERKS[perkId].name +
        " acquired!"
    );

}

/* ===================================== */
/* Retrieve Selection */
/* ===================================== */

function getSelectedPerks() {

    return {

        interview:
            localStorage.getItem("interview"),

        communication:
            localStorage.getItem("communication"),

        quest:
            localStorage.getItem("quest"),

        team:
            localStorage.getItem("team"),

        conflict:
            localStorage.getItem("conflict"),

        status:
            localStorage.getItem("status"),

        ada:
            localStorage.getItem("ada"),

        reputation:
            localStorage.getItem("reputation"),

        endgame:
            localStorage.getItem("endgame")

    };

}

/* ===================================== */
/* Calculate Character Stats */
/* ===================================== */

function calculateStats() {

    const stats = {

        communication: 0,
        teamwork: 0,
        leadership: 0,
        organization: 0,
        professionalism: 0,
        learning: 0,
        adaptability: 0

    };

    const selectedPerks = [

        localStorage.getItem("interview"),
        localStorage.getItem("communication"),
        localStorage.getItem("quest"),
        localStorage.getItem("team"),
        localStorage.getItem("conflict"),
        localStorage.getItem("status"),
        localStorage.getItem("ada"),
        localStorage.getItem("reputation"),
        localStorage.getItem("endgame")

    ];

    selectedPerks.forEach(perkId => {

        if(!perkId) return;

        const perk = PERKS[perkId];

        if(!perk) return;

        Object.entries(perk.stats)
        .forEach(([stat, value]) => {

            stats[stat] += value;

        });

    });

    Object.keys(
        ACHIEVEMENTS
    ).forEach(id => {

        if(

            localStorage.getItem(
                "achievement_" + id
            )

        ){

            const achievement =
            ACHIEVEMENTS[id];

            Object.entries(
                achievement.stats
            ).forEach(
            ([stat,value]) => {

                stats[stat] += value;

            });

        }

    });

    return stats;
}

/* ===================================== */
/* Update the Job-Boy Display */
/* ===================================== */

function updateJobBoyStats() {

    const stats =
    calculateStats();

    const setValue = (id, value) => {

        const element =
        document.getElementById(id);

        if(element){

            element.textContent =
            value;

        }

    };

    setValue(
        "stat-communication",
        stats.communication
    );

    setValue(
        "stat-teamwork",
        stats.teamwork
    );

    setValue(
        "stat-leadership",
        stats.leadership
    );

    setValue(
        "stat-organization",
        stats.organization
    );

    setValue(
        "stat-professionalism",
        stats.professionalism
    );

    setValue(
        "stat-learning",
        stats.learning
    );

    setValue(
        "stat-adaptability",
        stats.adaptability
    );

    localStorage.setItem(
    "jobBoyTotals",
    JSON.stringify(stats)
    );

}


/* ===================================== */
/* Career Recommendations */
/* ===================================== */

function getCareerRecommendations() {

    const stats =
    calculateStats();

    const careers = [];

    if(
        stats.communication >= 8 &&
        stats.teamwork >= 6
    ){
        careers.push(
            "Help Desk Support"
        );
    }

    if(
        stats.organization >= 8 &&
        stats.leadership >= 6
    ){
        careers.push(
            "Project Manager"
        );
    }

    if(
        stats.learning >= 8 &&
        stats.adaptability >= 6
    ){
        careers.push(
            "Information Security"
        );
    }

    if(
        stats.learning >= 6 &&
        stats.professionalism >= 6
    ){
        careers.push(
            "IT Installer"
        );
    }

    if(
        stats.communication >= 10 &&
        stats.leadership >= 10 &&
        stats.organization >= 10
    ){
        careers.push(
            "Vault Overseer"
        );
    }

    return careers;

}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateJobBoyStats();

    }
);

console.log(
    calculateStats()
);
updateJobBoyStats();
updateProgress();

/* ============================================================
   resetJobBoyProgress() — paste at the end of
   assets/js/jobboy-career.js. There must be ONLY ONE
   definition of this function in the whole project.
   Search for "function resetJobBoyProgress" — if you
   find more than one, delete the older ones.

   v3: the earlier versions failed in practice because
   they relied on (a) calling the parent's refresh
   functions and (b) window.top.location.reload().
   Both can throw / be silently caught (try/catch) and
   leave only the iframe reloaded, so the parent header
   and progress bar kept showing old values until a
   manual refresh. This version does not rely on either:

   1. Clears storage, then WRITES ZERO totals (not removes
      them) — refreshHeaderStats() in jobboy.js returns
      early if jobBoyTotals is null, leaving old numbers.
   2. Zeros the visuals directly, in the parent document
      AND in this frame, before any reload happens.
   3. Navigates the top window with a cache-busting URL
      (?reset=<timestamp>), which forces a fresh load
      instead of a cached copy of the old JS.

   After saving, do a HARD refresh once (Ctrl+Shift+R /
   Cmd+Shift+R) so the browser does not keep running a
   cached copy of jobboy-career.js.
   ============================================================ */

function resetJobBoyProgress() {
  if (!confirm("Start a new character? This will clear all perks, achievements, aptitude scores, and training progress.")) {
    return;
  }

  const categories = [
    "interview",
    "communication",
    "quest",
    "team",
    "conflict",
    "status",
    "ada",
    "reputation",
    "endgame"
  ];

  categories.forEach(function (category) {
    localStorage.removeItem(category);
    localStorage.removeItem("achievement_" + category);
  });

  localStorage.removeItem("visitedPages");

  // Write zeros explicitly. Do NOT leave these keys removed:
  // refreshHeaderStats() returns early on null and leaves
  // the old numbers on screen.
  localStorage.setItem(
    "jobBoyTotals",
    JSON.stringify({
      communication: 0,
      teamwork: 0,
      leadership: 0,
      organization: 0,
      professionalism: 0,
      learning: 0,
      adaptability: 0
    })
  );
  localStorage.setItem("jobBoyProgress", "0");

  // Zero the parent visuals directly — do not rely on the
  // parent's refresh functions, which may throw and be caught.
  try {
    const parentDoc = window.parent ? window.parent.document : null;
    if (parentDoc) {
      [
        "stat-communication",
        "stat-teamwork",
        "stat-leadership",
        "stat-organization",
        "stat-professionalism",
        "stat-learning",
        "stat-adaptability"
      ].forEach(function (id) {
        const el = parentDoc.getElementById(id);
        if (el) el.textContent = "0";
      });
      const text = parentDoc.getElementById("case-progress");
      if (text) text.textContent = "0%";
      const fill = parentDoc.getElementById("progress-fill");
      if (fill) {
        fill.style.width = "0%";
        fill.style.background = "#00ff66";
      }
    }
  } catch (e) { /* cross-origin parent: navigation below still rebuilds it */ }

  // Zero this frame's visuals too.
  document.querySelectorAll(".perk-selected").forEach(function (el) {
    el.classList.remove("perk-selected");
  });
  document.querySelectorAll(".achievement-claimed").forEach(function (el) {
    el.classList.remove("achievement-claimed");
  });

  // Belt and braces: try the parent refresh functions now that
  // the totals are zeros, so they cannot early-return.
  try {
    if (window.parent && typeof window.parent.refreshHeaderStats === "function") {
      window.parent.refreshHeaderStats();
    }
    if (window.parent && typeof window.parent.refreshProgressDisplay === "function") {
      window.parent.refreshProgressDisplay();
    }
  } catch (e) { /* ignore; direct zeroing + navigation below cover it */ }

  // Navigate the whole window, with a cache-busting query so
  // the browser cannot serve a cached copy of the old JS.
  // Delayed 100ms so the zeroed visuals paint first.
  setTimeout(function () {
    try {
      const topHref = window.top.location.href.split("?")[0].split("#")[0];
      window.top.location.href = topHref + "?reset=" + Date.now();
      return;
    } catch (e) { /* reading top href threw; try reload instead */ }
    try {
      window.top.location.reload();
      return;
    } catch (e) { /* fall through */ }
    try {
      if (window.parent && typeof window.parent.loadPage === "function") {
        window.parent.loadPage(0);
        return;
      }
    } catch (e) { /* fall through */ }
    location.reload();
  }, 100);
}