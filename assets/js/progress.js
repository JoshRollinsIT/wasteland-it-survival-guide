let visitedPages =
    JSON.parse(localStorage.getItem("visitedPages")) || [];

function markVisited(pageName) {

    if (!visitedPages.includes(pageName)) {

        visitedPages.push(pageName);

        localStorage.setItem(
            "visitedPages",
            JSON.stringify(visitedPages)
        );
    }

    updateProgress();
}

function updateProgress() {

    const totalPages = 10;

    const percent =
        (visitedPages.length / totalPages) * 100;

    const progressText =
        document.getElementById("progress-text");

    if (progressText) {
        progressText.textContent =
            `Training Completion: ${Math.round(percent)}%`;
    }
}