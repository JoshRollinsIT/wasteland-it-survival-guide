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
  category: "game",
  stats: {
    communication: 3,
    professional:3,
    leadership: 1
  }
},

teamBuilder: {
  name: "Team Builder",
  category: "game",
  stats: {
    teamwork: 3,
    leadership: 3,
    communication: 1
  }
},

adaptableLearner: {
  name: "Adaptable Learner",
  category: "game",
  stats: {
    learning: 3,
    adaptability: 3,
    organization: 1
  }
},

resilientSurvivor: {
  name: "Resilient Survivor",
  category: "game",
  stats: {
    adaptability: 3,
    professional: 3,
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

            updateJobBoyStats();

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

                card.classList.add(
                    "achievement-claimed"
                );

                updateJobBoyStats();

            }

        }
    );

});

});

/* ===================================== */
/* Save Selection */
/* ===================================== */

function selectPerk(category, perkId) {

 localStorage.setItem(
     category,
     perkId
 );

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
            localStorage.getItem("reputation")

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
        localStorage.getItem("reputation")

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