/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
const tbody = document.querySelector('tbody');
function clearCart() {
  if (tbody.hasChildNodes()){
    while (tbody.firstChild){
      tbody.removeChild(tbody.firstChild);
    }
  
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  // TODO: Find the table body
  const tbody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
 console.log(cart.items.length);
  for (let i=0;i<cart.items.length;i++){
    const trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  let previewedItems = JSON.parse(localStorage.getItem('cart'))[i].product;
  let previewedquant = JSON.parse(localStorage.getItem('cart'))[i].quantity;
  console.log(previewedItems,previewedquant);

  const tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent="remove"
  tdEl.id=i;
  const tdEl2 = document.createElement('td');
  trEl.appendChild(tdEl2);
  tdEl2.textContent=previewedquant
  const tdEl3 = document.createElement('td');
  trEl.appendChild(tdEl3);
  tdEl3.textContent=previewedItems
} 
  }
  
  // TODO: Create a TR

  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(event.target.id)
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
console.log(event.target);
}

// This will initialize the page and draw the cart on screen
renderCart();
