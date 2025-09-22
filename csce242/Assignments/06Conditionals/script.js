document.getElementById("menu-toggle").onclick = function() {
    let menu = document.getElementById("menu-items");
    let arrow = document.getElementById("arrow");

    menu.classList.toggle("show");
    arrow.classList.toggle("open");
};

document.getElementById("exercise1").onclick = function() {
    document.getElementById("planting").classList.remove("hidden");
    document.getElementById("digitalClock").classList.add("hidden");
};

document.getElementById("exercise2").onclick = function() {
    document.getElementById("digitalClock").classList.remove("hidden");
    document.getElementById("planting").classList.add("hidden");
};

function updatePlantStatus(value) {
    if (value >= 1 && value <= 2) {
        plantImage.src = "images/watered.png";
        p1.textContent = `It's been ${value} day${value > 1 ? "s" : ""} since watering your plant.`;
        p2.textContent = `Your plant is healthy and Happy`
    } else if (value >= 3 && value <= 5) {
        plantImage.src = "images/needswater.png";
        p1.textContent = `It's been ${value} day${value > 1 ? "s" : ""} since watering your plant.`;
        p2.textContent = `Your plant needs Water`
    } else if (value >= 6 && value <= 9) {
        plantImage.src = "images/almostdead.png";
        p1.textContent = `It's been ${value} day${value > 1 ? "s" : ""} since watering your plant.`;
        p2.textContent = `Leaves are dropping, your plant is dying`
    } else if (value >= 10 && value <= 12) {
        plantImage.src = "images/dead.png";
        p1.textContent = `It's been ${value} day${value > 1 ? "s" : ""} since watering your plant.`;
        p2.textContent = `Your plant is dead`
    }
}

document.getElementById("daysRange").oninput = function() {
    updatePlantStatus(parseInt(this.value));
};
updatePlantStatus(1);

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours == 0) {
        hours = 12;
    }
    
    if (minutes < 10) minutes = "0" + minutes;

    document.getElementById("clock").textContent = hours + ":" + minutes + " " + ampm;
}

updateClock();
setInterval(updateClock, 60000);
