const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("sorry");
    }

};

const showShoes = async() => {
    const shoes = await getshoes();
    const shoeListDiv = document.getElementById("shoe-list");
    shoes.forEach((shoe) => {
        const section = document.createElement("section");
        section.classList.add("shoe");

        consth3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = shoe.name;

        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `brand: ${shoe.brand}`;

        shoeListDiv.append(section);
    });

};

showShoes();

