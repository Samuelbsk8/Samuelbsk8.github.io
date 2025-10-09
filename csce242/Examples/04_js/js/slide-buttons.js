document.getElementById("arrow-prev").onclick = (event) =>{
    event.preventDefault();
    const currentSlide = document.querySelector("#slideshow img:not(.hidden)")
    let nextSlide = currentSlide.previousElementSibling;

    if(!prevSlide) {
        prevSlide = document.querySelector("#slideshow img:last-child");
    }

    currentSlide.classList.add("hidden");
    prevSlide.classList.remove("hidden");
}

document.getElementById("arrow-next").onclick = (event) =>{
    event.preventDefault();
    const currentSlide = document.querySelector("#slideshow :not(.hidden)")
    let nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide) {
        nextSlide = document.querySelector("#slideshow img:first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}