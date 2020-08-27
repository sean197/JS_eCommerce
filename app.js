// Variables
const shoes = document.querySelector(".shoes"), 
      shoppingCartContent = document.querySelector("#cartContent tbody"),
      clearCartBtn = document.querySelector("#clearCart")
      ;

// Listeners

loadEventListeners();

// Add all event listeners
function loadEventListeners(){
    // when a new shoe is added

        shoes.addEventListener("click", buyShoe);

    // When the remove button is clicked
    shoppingCartContent.addEventListener("click", removeShoe);

    // Clear Cart Btn
    clearCartBtn.addEventListener("click", clearCart);

    // Document ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}

// Function

function buyShoe(e){
    //console.log(e.target);

    // use event delegation to find the shoe added to cart
    if(e.target.classList.contains("addToCart")){
        console.log("added");

        // read the values of the shoe
        //console.log(e.target.parentElement.parentElement);
        const shoe = e.target.parentElement.parentElement;

        // read the values
        // Pass the course information
        getShoeInfo(shoe);
        }
}

// Reads info of the selected shoe
// parameter can be named after anything

function getShoeInfo(shoe) {

    // Create an object with course data
    const shoeInfo = { 
        image: shoe.querySelector("img").src,
        title: shoe.querySelector(".itemTitle").innerHTML,
        price: shoe.querySelector(".itemPrice").innerHTML,
        id: shoe.querySelector(".addToCart").getAttribute("data-id")
    } 

    // insert into shopping cart
    addIntoCart(shoeInfo);

}

// Display the selected course into your shopping cart

function addIntoCart(shoe){
    // create table

            const row = document.createElement("tr");



            // appending to basket
             row.innerHTML = `
             <tr>
                <td>
                <img src="${shoe.image}" width=100>
                </td>
                <td>${shoe.title}</td>
                <td>${shoe.price}</td>             
                <td>
                <button type="button" data-id="${shoe.id}" class="btn btn-danger removeItem">Remove Item</button
                </td>
           </tr>`;

            shoppingCartContent.appendChild(row);             
         
            // Add Shoe to Storage
            saveIntoStorage(shoe); 
}

// Add Shoe into Local Storage
function saveIntoStorage(shoe){
    let shoes = getShoeFromStorage();

    // add the shoe into an array
    shoes.push(shoe)

    // Local Storage saves items as string hence we need to stringify it
    localStorage.setItem("shoes", JSON.stringify(shoes));

    console.log(shoes)
}

// Get conent from local storage
function getShoeFromStorage(){

    let shoes;

    // Check if courses key exists
    // If something exists we get value otherwise create empty array
    if(localStorage.getItem("shoes") === null) {
        shoes = []
    } else {
        shoes = JSON.parse(localStorage.getItem("shoes"));
    }
    return shoes;
}

// remove course from DOM
function removeShoe(e){

    let shoe, shoeID;

    // Remove from DOM
    if(e.target.classList.contains("removeItem")){
        e.target.parentElement.parentElement.remove();
        shoe = e.target.parentElement.parentElement;
        shoeID = shoe.querySelector("button").getAttribute("data-id");
    }
    console.log(shoeID)
    // Remove from Local Storage
    removeShoeLocalStorage(shoeID);
}

// Remove from LS
function removeShoeLocalStorage(id){
    // Get Shoe From LS
    let shoesLS = getShoeFromStorage();

    // Loop through array and find index to remove
    shoesLS.forEach(function(shoeLS, index){
        if(shoeLS.id === id){
            // Passing index and we want to remove 1 item
            shoesLS.splice(index, 1)
        }
    });

    // Add rest of the array
    localStorage.setItem("shoes", JSON.stringify(shoesLS));


    console.log(shoesLS);
}


// Clear the shopping cart
function clearCart(){

    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    } 

    // Clear from Local Storge
    clearLocalStorage();
}

// Clear Local Storage
function clearLocalStorage(){
    localStorage.clear();
}

// Loads when document is ready & prints courses into shopping cart
function getFromLocalStorage() {
    let shoesLS = getShoeFromStorage();

    // LOOP through the courses and print inot cart
    shoesLS.forEach(function(shoe) {
        // Create table row <tr>
        const row = document.createElement("tr");

        // print the content
        row.innerHTML = `
             <tr>
                <td>
                <img src="${shoe.image}" width=100>
                </td>
                <td>${shoe.title}</td>
                <td>${shoe.price}</td>             
                <td>
                <button type="button" data-id="${shoe.id}" class="btn btn-danger removeItem">Remove Item</button
                </td>
           </tr>
           `;

        shoppingCartContent.appendChild(row);
    });
}