/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
const selectElement = document.getElementById('items');
let quantityArr =[]


function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product

  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    selectElement.appendChild(option);
    option.value = Product.allProducts[i].name;
    option.textContent = Product.allProducts[i].name;
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let chosedItem = selectElement.value
    // TODO: get the quantity
    const quantityEl = document.getElementById('quantity');
    let quantity = quantityEl.value ;
  // TODO: using those, add one item to the Cart
    cart.addItem(chosedItem,quantity);                    
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
   let numOfItems= JSON.parse(localStorage.getItem('Items')).length;
   const navCounter = document.getElementById('itemCount');              //---------------here
   navCounter.textContent = numOfItems;
}
let previewedItems =[] ;
let previewedquant ;
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  for(let i =0; i<JSON.parse(localStorage.Items).length;i++){
  
  previewedItems = JSON.parse(localStorage.getItem('Items'))[i].product;
  previewedquant = JSON.parse(localStorage.getItem('Items'))[i].quantity;
  }
  // TODO: Add a new element to the cartContents div with that information
  const cartContentsEL =document.getElementById('cartContents');
  const ulEl =document.createElement('ul');
  const liEl =document.createElement('li');
  cartContentsEL.appendChild(ulEl);
  ulEl.appendChild(liEl);
  liEl.textContent= ` ${previewedquant}  ${previewedItems}`;

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
