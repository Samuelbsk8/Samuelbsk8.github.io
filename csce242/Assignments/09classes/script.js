class Car {
    constructor(name, company, image, framed) {
        this.name = name;
        this.company = company;
        this.image = image;
        this.framed = framed;
    }

    getCard() {
        const div = document.createElement("div");
        div.className = "card";

        const caption = document.createElement("h3");
        caption.textContent = this.name;
        div.appendChild(caption);

        const img = document.createElement("img");
        img.src = this.image;
        img.alt = this.name;
        div.appendChild(img);
        div.onclick = () => {
            const popup = document.getElementById("popup");
            document.getElementById("popup-title").innerText = this.name;
            const popupImg = document.getElementById("popup-img");
            popupImg.src = this.image;
            if (this.framed) {
                popupImg.style.border = "5px solid black";
            } else {
                popupImg.style.border = "none";
            }

            let info = document.getElementById("popup-info");
            if (!info) {
                info = document.createElement("p");
                info.id = "popup-info";
                document.querySelector(".popup-content").insertBefore(info, popupImg);
            }
            info.innerHTML = `<b>Company:</b> ${this.company}`;

            popup.classList.remove("hidden");
        };

        return div;
    }
}

const cars = [
    new Car("Ranchero", "Ford", "images/1after.png", true),
    new Car("Falcon", "Ford", "images/2after.png", false),
    new Car("Celica", "Toyota", "images/3after.png", true),
    new Car("Javelin", "AMC", "images/4after.png", false)
];

const container = document.getElementById("cars");
container.innerHTML = "";
cars.forEach(car => container.appendChild(car.getCard()));

document.getElementById("close").onclick = () => {
    document.getElementById("popup").classList.add("hidden");
};