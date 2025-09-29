document.getElementById("btn-draw-scene").onclick = () => {
    let cloudsDiv = document.getElementById("clouds");
    let treesDiv = document.getElementById("trees");
    let sunOrMoonDiv = document.getElementById("sun-or-moon");

    cloudsDiv.innerHTML = "";
    treesDiv.innerHTML = "";
    sunOrMoonDiv.innerHTML = "";

    let now = new Date();
    let hour = now.getHours();

    if (hour >= 18 || hour < 6) {
        document.body.style.background = "black";
        let moon = document.createElement("div");
        moon.className = "moon";
        sunOrMoonDiv.append(moon);
    } else {
        document.body.style.background = "lightskyblue";
        let sun = document.createElement("div");
        sun.className = "sun";
        sunOrMoonDiv.append(sun);
    }

    for (let i = 0; i < 6; i++) {
        let cloud = document.createElement("div");
        cloud.className = "cloud";
        cloudsDiv.append(cloud);
    }

    for (let i = 0; i < 6; i++) {
        let tree = document.createElement("div");
        tree.className = "tree";

        let trunk = document.createElement("div");
        trunk.className = "trunk";

        let leaves = document.createElement("div");
        leaves.className = "leaves";

        tree.append(leaves);
        tree.append(trunk);
        treesDiv.append(tree);
    }
    
};
