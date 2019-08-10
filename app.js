// Item constructor 
function Item (item, quantity, agent){
  this.item = item;
  this.quantity = quantity;
  this.agent = agent;
}

// UI construtor 
function UI(){}

// add item to UI 
UI.prototype.addItemToInventory = function(laptop) {
  // get tbody from DOM
  const tableBody = document.querySelector('#inventory-content');

  // create row in the table 
  const row = document.createElement('tr');

  // insert laptop object in the UI 
  row.innerHTML = `
    <td>${laptop.item}</td>
    <td>${laptop.quantity}</td>
    <td>${laptop.agent}</td>
    <td><i class="fas fa-trash"></i></td>
  `

  // append row to table body 
  tableBody.appendChild(row);
}

// get form submission
document.querySelector('#inventory-list').addEventListener('submit', e => {
  const item = document.querySelector('#item').value;
  const quantity = document.querySelector('#quantity').value;
  const agent = document.querySelector('#agent').value;

  // instantiate Item object
  const laptop = new Item(item, quantity, agent);

  // instantiate UI class
  const ui = new UI();

  // add item to UI 
  ui.addItemToInventory(laptop);
  
  e.preventDefault();
});