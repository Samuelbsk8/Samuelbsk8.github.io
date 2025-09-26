document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);
    //Loop and write the numbers one through 10
    for(let i = 1; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }

}

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum) {
        error.innerHTML = "* The second number must be bigger than the first"
        return;
    }

    //loop for every number from start to end display the number in paragraphs
    for(i = startNum; i <= endNum; i++){
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`You clicked Number ${i}`);
        }
    }

}

document.getElementById("btn-show-toys").onclick = () => {
    const toylist = document.getElementById("toy-list");
    toylist.innerHTML = "";

    const toys = ["Ball", "Skipping Rope", "doll", "mini car", "elmo"]

    /* First Way to Iterate */
    //iterate over toys add li's to the ul
    //()=>{} embeds a function
    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        li.innerHTML = toy;
        toylist.append(li);
    });


};

document.getElementById("btn-show-toy-prices").onclick = () => {
    const toys = [];
    toys["ball"] = 2.99;
    toys["barbia"]= 19.99;
    toys["skipping rope"] = 1.98;
    toys["match box car"] = 2.54;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";

    for(let toy in toys){
        const p = document.createElement("p");
        p.innerHTML = toy
        toyDiv.append(p);
        //when i click the paragraph... in a div below show the price
        p.onclick = () =>{
            
        }
    }
};