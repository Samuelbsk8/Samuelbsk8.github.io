const beforeRestoration = {
    "Ranchero": "images/1before.png",
    "Falcon": "images/2before.png",
    "Celica": "images/3before.png",
    "Javelin": "images/4before.png"
};

const afterRestoration = {
    "Ranchero": "images/1after.png",
    "Falcon": "images/2after.png",
    "Celica": "images/3after.png",
    "Javelin": "images/4after.png"
};

const container = document.getElementById("cars");
container.innerHTML = "";

for (let car in beforeRestoration) {
    const div = document.createElement("div");
    div.className = "card";
    div.id = `card-${car}`;
    div.style.position = "relative";

    const img = document.createElement("img");
    img.src = beforeRestoration[car];
    img.alt = `${car} before restoration`;
    div.appendChild(img);

    div.onmouseenter = () => {
        if (!div.caption) {
            const caption = document.createElement("span");
            caption.textContent = car;
            caption.style.position = "absolute";
            caption.style.bottom = "0";
            caption.style.left = "0";
            caption.style.width = "100%";
            div.appendChild(caption);
            div.caption = caption;
        }
    };

    div.onmouseleave = () => {
        if (div.caption) {
            div.removeChild(div.caption);
            div.caption = null;
        }
    };

    div.onclick = () => {
        const popup = document.getElementById("popup");
        document.getElementById("popup-title").innerText = `${car} After Restoration`;
        document.getElementById("popup-img").src = afterRestoration[car];
        popup.classList.remove("hidden");
    };

    container.appendChild(div);
}

document.getElementById("close").onclick = () => {
    document.getElementById("popup").classList.add("hidden");
};
