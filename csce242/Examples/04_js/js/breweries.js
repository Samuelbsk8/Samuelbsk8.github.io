const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/v1/breweries/{obdb-id}";
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log("Issure")
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();
    const breweriesSection = document.getElementById("breweries");

    breweries.forEach((pub)=>{
        const section = document.createElement("section");
        breweriesSection.append(section);
        section.classList.add("brewery");

        const h3 =document.createElement("h3");
        section.append(h3)
        const a = document.createElement("a");
        section.append(a);
        a.innerhtml = pub.name;
        a.href = pub.website_url;

        const
    });
};

showBreweries();