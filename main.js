function projects() {
    if (document.getElementById("projects").style.display === "none") {
        document.getElementById("welcome").style.display = "none";
        document.getElementById("aboutMe").style.display = "none";
        document.getElementById("projects").style.display = "block";
    } else {
        document.getElementById("projects").style.display = "none";
    }
}

function aboutMe() {
    if (document.getElementById("aboutMe").style.display === "none") {
        document.getElementById("welcome").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("aboutMe").style.display = "block";
    } else {
        document.getElementById("aboutMe").style.display = "none";
    }
}

function games() {
    if (document.getElementById("games").style.display === "none") {
        document.getElementById("games").style.display = "block";
    } else {
        document.getElementById("games").style.display = "none";
    }
}

function simulators() {
    if (document.getElementById("simulators").style.display === "none") {
        document.getElementById("simulators").style.display = "block";
    } else {
        document.getElementById("simulators").style.display = "none";
    }
}