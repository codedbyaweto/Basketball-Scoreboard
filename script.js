// Get score display elements
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Function to update scores
function updateScore(team, points) {
    if (team === "home") {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
} 

// Function to reset scores
function resetScore(team) {
    if (team === "home") {
        homeScore = 0;
        homeScoreEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore = 0;
        guestScoreEl.textContent = guestScore;
    }
}

// Event listeners for Home buttons
let homeScoreBtn1 = document.getElementById("home-score-btn-1");
let homeScoreBtn2 = document.getElementById("home-score-btn-2");
let homeScoreBtn3 = document.getElementById("home-score-btn-3");
let homeResetBtn = document.getElementById("home-reset-btn");

homeScoreBtn1.addEventListener("click", () => updateScore("home", 1));
homeScoreBtn2.addEventListener("click", () => updateScore("home", 2));
homeScoreBtn3.addEventListener("click", () => updateScore("home", 3));
homeResetBtn.addEventListener("click", () => resetScore("home"));

// Event listeners for Guest buttons
let guestScoreBtn1 = document.getElementById("guest-score-btn-1");
let guestScoreBtn2 = document.getElementById("guest-score-btn-2");
let guestScoreBtn3 = document.getElementById("guest-score-btn-3");
let guestResetBtn = document.getElementById("guest-reset-btn");

guestScoreBtn1.addEventListener{"click", () => updateScore("guest", 1));
guestScoreBtn2.addEventListener("click", () => updateScore("guest", 2));
guestScoreBtn3.addEventListener("click", () => updateScore("guest", 3));
guestResetBtn.addEventListener("click", () => resetScore("guest"));