const dishes = document.querySelector(".menulist");
const price = document.querySelector(".pricelist");
const menufield = document.querySelector(".menufield");
const pricefield = document.querySelector(".pricefield");
const click = document.querySelector(".click")

click.addEventListener("click", function () {
    // Create new Li programatically
    const newLI = document.createElement("LI");
    const PriceLI = document.createElement("LI")
    // Get the input value
    const Licontent = document.createTextNode(menufield.value);
    const Pricecontent = document.createTextNode(pricefield.value)
    //add the input inside the new Li
    newLI.appendChild(Licontent);
    PriceLI.appendChild(Pricecontent)
    // Attach the newLI to the menu
    dishes.appendChild(newLI);
    price.appendChild(PriceLI)

}
)
