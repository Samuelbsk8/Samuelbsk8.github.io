// Fetch the testimonials JSON
const getTestimonials = async () => {
    const url = "https://github.com/Samuelbsk8/Samuelbsk8.github.io/blob/main/csce242/Projects/part6/json/testimonials.json"; 
    
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Issue loading testimonials:", error);
    }
};

const showTestimonials = async () => {
    const testimonials = await getTestimonials();
    const container = document.getElementById("testimonials-container");

    testimonials.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("testimonial-card");
        container.appendChild(card);

        const img = document.createElement("img");
        img.src = item.img_name;
        img.alt = item.dog_name;
        card.appendChild(img);

        const h2 = document.createElement("h2");
        h2.textContent = `${item.client_name} & ${item.dog_name}`;
        card.appendChild(h2);

        const pType = document.createElement("p");
        pType.textContent = `Training Type: ${item.training_type}`;
        card.appendChild(pType);

        const pStars = document.createElement("p");
        pStars.textContent = '★'.repeat(item.stars) + '☆'.repeat(5 - item.stars);
        card.appendChild(pStars);

        const pReview = document.createElement("p");
        pReview.textContent = item.review;
        pReview.classList.add("review");
        card.appendChild(pReview);
    });
};


showTestimonials();
