// add data to localStorage

const addToCart = document.querySelectorAll(".addToCart");

let items = [];
// let number = JSON.getItem();

console.log(addToCart);

console.log(items)

for(let i = 0; i < addToCart.length; i++){
    addToCart[i].addEventListener("click", function(e){
        //console.log(i + 1)
        //console.log(e.target.parentElement.parentElement.parentElement.children[1].innerHTML)

        if(typeof(Storage) !== "undefined"){
             let item = {
                 id: i + 1,
                 name: e.target.parentElement.parentElement.parentElement.children[1].innerHTML,
                price: e.target.parentElement.parentElement.parentElement.children[2].children[0].innerHTML,
                inCart: 1
             }; 

             // Adding items to local storage
             // If there's not any items in the local storage
             if(JSON.parse(localStorage.getItem("items")) === null){
                 items.push(item);
                localStorage.setItem("items", JSON.stringify(items)); 
                //console.log(items);
                window.location.reload();
             } else { 
                const localItems = JSON.parse(localStorage.getItem("items"));
                localItems.map(function(data){
                    if(item.id == data.id){
                        // increment of incart
                        item.inCart = data.inCart + 1;
                    } else {
                        items.push(data);
                        item.inCart += + 1;
                    }
                });
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items))
                window.location.reload();
            } 
        } else {
            alert("local storage not working");
        }
    });
    // adding data to cart UI
const cartIcon = document.querySelector(".fa-shopping-cart");
let number = 0;
// JSON.parse(localStorage.getItem("items")).map(function(data){
//     number = number + data.inCart
// });
// cartIcon.innerHTML = number;

// // when id isn't matched we'll push this inot the array

// // adding data to table
// let productContainer = document.querySelector(".products");
// // adding data to string
// let table = "";

// productContainer += `
//             <tr>
//             <th scope="row">${item.name}</th>
//             <td>£${item.price}</td>
//             <td>${item.inCart}</td>
//             <td>£${item.inCart * item.price}</td>
//             <td><button type="button" class="btn btn-danger removeItem">Remove Item</button</td>
//           </tr>`;

// productContainer.innerHTML = table

 // products in the cart
 let cartItems = localStorage.getItem("productsInCart");

 // let cartCost = localStorage.getItem("totalCost");

 // When we get data from LS it is in a string hence we parsify
 cartItems = JSON.parse(cartItems);

 let productContainer = document.querySelector(".products");

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
     Object.values(cartItems).map(function(item){
     // the next time it runs we have something
     var KeyName = localStorage.key(item);
         console.log(KeyName)
     item.price = Math.round(item.price * 100) / 100;
         productContainer.innerHTML += `
         <tr>
         <th scope="row">${item.title}</th>
         <td>£${item.price}</td>
         <td>${item.inCart}</td>
         <td>£${item.inCart * item.price}</td>
         <td><button type="button"  onclick="deleteItem()" class="btn btn-danger removeItem">Remove Item</button</td>
       </tr>`;
        
     });

     productContainer.innerHTML += `
     <tr>
     <th "basketTotalTitle" scope="row">Basket Total</th>
     <td></td>
     <td></td>
     <td>£${cartCost}</td>
     <td></td>
   </tr>
     `;
}} 