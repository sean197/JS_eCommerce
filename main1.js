// Add To Cart BTN
const carts = document.querySelectorAll(".addToCart");

const shoes = document.getElementsByClassName("shopItem");

// const basketTable = document.querySelector("body > table > tbody");

let productsArray = [
    // Men
    {
        title: "Nike Blazer Mid",
        tag: "nikeblazermid",
        price: 85.00,
        inCart: 0   
    },
    {
        title: "Nike Air Huarache",
        tag: "nikeairhuarache",
        price: 110.00,
        inCart: 0   
    },
    {
        title: "Air jordan 1 Mid-Shoes",
        tag: "airjordan1mid-shoes",
        price: 94.99,
        inCart: 0   
    },
    {
        title: "Nike Air Max 720",
        tag: "nikeairmax720",
        price: 154.99,
        inCart: 0   
    },
    {
        title: "Nike Air Max 97",
        tag: "nikeairmax97",
        price: 145.00,
        inCart: 0   
    },
    {
        title: "Nike Air VapourMax Plus",
        tag: "nikeairvapourmaxplus",
        price: 169.95,
        inCart: 0   
    }
];

// Add To Cart BTN
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener("click", function(){
        cartNumbers(productsArray[i]);
        totalCost(productsArray[i]);
    })
}

// // Remove from cart
// function deleteCart(e){
//     console.log(e);
//  }

// const removeBtn = document.getElementsByClassName("btn-danger");
// console.log(removeBtn);

// // const deleteItem = document.querySelectorAll(".btn-danger");

// console.log(deleteItem);
// // for (let i = 0; i < deleteItem.length; i++){
// //     deleteItem[i].addEventListener("click", function(){
// //         deleteCart();
// //     })
// // }

//const removeBtn = document.querySelector("#removeItem");
//
//for(let a= 0; a < removeBtn.length; a++){
//    removeBtn[i].addEventListener("click", function(e){
//        console.log(e)
//    });
//}

// This function enables the number of items in cart to stay put..
// ... regardless of if we refresh the browser
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers){
        document.querySelector(".fas span").innerHTML = productNumbers;
    }
}

// Records the quantity of items in basket
function cartNumbers(product){
    console.log("Product is  ", product)
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".fas span").innerHTML = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".fas span").innerHTML = 1
    }

    setItems(product);
}

function setItems(product){
    // products in the cart
    let cartItems = localStorage.getItem("productsInCart");

    // Converts from JSON to JS Object
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                // updating items in cart
                /// ... : grabbing what was from your cartItems from before
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
          // in cart properties in object
          product.inCart = 1;

          cartItems = {
              [product.tag]: product
          }
    }

    console.log("My cartItems are ", cartItems);

    // We need to make itms in local storage strings in JSON format
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

// Total cost
function totalCost(product){
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem("totalCost");

    console.log("My cartCost i", cartCost);

    if(cartCost != null){
    // Whenever we get data back from local storage..
    // it comes back s a string
    // converting from string to number
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

// display to basket
function displayCart(){
    // products in the cart
    let cartItems = localStorage.getItem("productsInCart");

    // let cartCost = localStorage.getItem("totalCost");
   
    // When we get data from LS it is in a string hence we parsify
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");

    let basketCost = document.querySelector(".totalPrice");

    console.log(cartItems);

    // if cartItems exist and productContainer is present on webpage
    //... the if statement works
    if(cartItems && productContainer) {
        // initially when the page is loaded the we will see nothing
       

        let cartCost = localStorage.getItem("totalCost");


        // Values in the object
        // map functin calls function for each element in an array
        /* This loops through each of the objects values
        name, tag, price
        */
        // checks the values inside of the cart items
        Object.values(cartItems).map( (item) => {
            productContainer.innerHTML += `
            <div class="product">
            <i class=" mr-5 far fa-trash-alt fa-2x"></i>
                <span>${item.title}</span>
            </div>
            <div class="price sm-hide">£${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
            </div>
            <div class="total">£${item.inCart * item.price}</div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">£${cartCost}</h4>
            </div>`;

        deleteButtons();
    }
}

function deleteButtons (){
    let deleteBtn = document.querySelectorAll(".fa-trash-alt");
    // initialising the variable
    let productName;
    let productNumbers = localStorage.getItem("cartNumbers");
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");

    for (let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener("click", function(){
            // loking for a space globally and removing the empty space
            productName =  deleteBtn[i].parentElement.textContent.trim()
            .toLowerCase().replace(/ /g, "");
            // console.log(productName);
            // Transform text in lowercase
            // console.log(cartItems[productName].title + " " + ".. ITEM NO.  "+ cartItems[productName].inCart + cartItems[productName].price);

            // console.log("We have " + productNumbers + " in cart.");

            // updating local storage cart numbers
            localStorage.setItem("cartNumbers", productNumbers - cartItems[productName].inCart);

            localStorage.setItem("totalCost", cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

           delete cartItems[productName];

            // update cart items in LS
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));

         displayCart();
         onLoadCartNumbers();
            
        });
        
    }
} 


// The cart will display the number of items without a click event
onLoadCartNumbers();
displayCart();
