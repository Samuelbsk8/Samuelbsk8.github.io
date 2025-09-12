document.getElementById("div-1").onclick = (event) => {
    document.getElementById("lyrics").innerHTML = `
        <p>Here comes the sun</p>
        <p id="sun-1">Sun</p>
        <p id="sun-2">Sun</p>
        <p id="sun-3">Sun</p>
        <p>Here it comes</p>
    `;
    event.currentTarget.classList.add("clicked");
};


document.getElementById("color-picker").oninput = (event) => {
    const color = event.currentTarget.value;
    const colorText = document.getElementById("p-color");

    colorText.textContent = `Color picked: ${color}`;
    colorText.style.color = color;
};


document.getElementById("weather-img").onclick = (event) => {
    const img = event.currentTarget;
    img.src = "images/sunny.jpg";
};