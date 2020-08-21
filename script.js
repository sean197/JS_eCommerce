// if(document.readyState == "loading"){
//     // DOMContentLoaded: Makes sure content is loaded before you modift anything on DOM
//     // ready; function
//     document.addEventListener("DOMContentLoaded", ready);
// } else{
//     ready()
// }

// // hence code will work  even if page isn't already loaded
// function ready (){
//     const removeBtn = document.getElementsByClassName("trash");
//     console.log(removeBtn);

// // loop through all remove buttons in cart
// // Looping through the HTML collection of trash icons
// for (var i = 0 ; i < removeBtn.length; i++){
//     var button = removeBtn[i];
//     console.log(button);
//     button.addEventListener("click", removeCartItem);
// } 

// var quantityInput = document.getElementsByClassName("cartQuantity");
//     for (var i = 0; i < quantityInput.length; i++){
//         var input = quantityInput[i];
//         input.addEventListener("change", quantityChanged)
//     }

//     // Adding items to cart
//     var addToCartBtn = document.getElementsByClassName("addToCart");
//     console.log(addToCartBtn);
//     for (var i = 0; addToCartBtn.length; i++){
//         // The index of the item we want
//         console.log(btn)
//         const btn = addToCartBtn[i];
//         btn.addEventListener("onClick", addToCartClicked);
//         // console.log(btn); 
//     }
// }


// // Functions

// // Remove Cart item
// function removeCartItem(e){
//         var buttonClicked = e.target;
//         buttonClicked.parentElement.parentElement.parentElement.remove();
//         updateCartTotal();
// }

// // update quantity of items
// function quantityChanged(e){
//     var input = e.target;
//     if(isNaN(input.value)  || input.value <= 0){
//         input.value = 1;
//     }
//     updateCartTotal();
// }

// // add items to cart
// function addToCartClicked(e){
//     var button = e.target
//     // the parent div
//     var shoe = button.parentElement.parentElement;
//     var title = shoe.getElementsByClassName("shopItem")[2];
//     console.log(title); 
// }

// // update cart total
// function updateCartTotal() {
//     var table = document.getElementsByClassName("table")[0];
//     var cartItems = table.getElementsByClassName("cartItems");     
//     var total = 0;
//     for(var i = 0; i < cartItems.length; i++){
//         // Whatever row we currently are in in this array
//         var cartRow = cartItems[i];
//         var priceElement = cartRow.getElementsByClassName("cartPrice")[0];
//         console.log(priceElement); 
//         var quantityElement = cartRow.getElementsByClassName("cartQuantity")[0];
        
//         console.log(quantityElement); 
//         // replace replaces the £ currency to nothing
//         // parseFloat: turns any string to a float
//         var price = parseFloat(priceElement.innerText.replace("£", ""));
        
//         var quantity = quantityElement.value;

//         // total value changes everytime we ..
//         // .. go through loop
//         total = total + (price * quantity);
//         document.getElementsByClassName("cartTotal")[0].innerText = "£" + total;
//     }
//     // round total value by two decimal places
//     total = Math.round(total * 100) / 100; 
// } 

// for ( let i = 0; i < carts.length; i++){
//     carts[i].addEventListener("click",function(e){
//         e.preventDefault();
            
//         const shoe = e.target.parentElement.parentElement.parentElement;

//         const title = document.querySelector(".itemTitle").innerHTML;
        
//         // const title = shoe.querySelector(".itemTitle");
//         const price = shoe.querySelector(".itemPrice").innerHTML;

//         let cartObj = {
//              title,
//             price,
//             // size
//         }

//         //console.log(cartObj);

//         productsArray.push(cartObj);

//         // in order to store objects in local storage..
//         // we need to store the text in strings
//         let itemString = JSON.stringify(productsArray);

//         // stored the array in local storage
//      localStorage.setItem("orders", itemString);
//      console.log("Set Item" + itemString)

//      // get items
//      let storage = JSON.parse(localStorage.getItem("orders"));
//     console.log("Get Item " + storage);


//     ``
//     })
// }
