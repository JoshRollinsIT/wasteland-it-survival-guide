/* ===================================== */
/* JOB-BOY CAREER SYSTEM */
/* ===================================== */


/* ===================================== */
/* The Perk Database */
/* ===================================== */

const PERKS = {

    /* Interview */

professionalApprentice: {
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
}


};

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

        });

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

    const character =
    getSelectedPerks();

    const totals = {

        communication: 0,
        teamwork: 0,
        leadership: 0,
        organization: 0,
        professionalism: 0,
        technical: 0,
        adaptability: 0

    };

    Object.values(character)
    .forEach(perkId => {

        if(!perkId) return;

        const perk =
        PERKS[perkId];

        if(!perk) return;

        Object.entries(
            perk.stats
        )
        .forEach(
        ([stat, value]) => {

            totals[stat] += value;

        });

    });

    return totals;

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
        stats.technical >= 8 &&
        stats.adaptability >= 6
    ){
        careers.push(
            "Information Security"
        );
    }

    if(
        stats.technical >= 6 &&
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