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

// display alert
UI.prototype.displayAlert = function(message, className){
  // create div element 
  const div = document.createElement('div');

  // add class name to div
  div.className = `alert ${className}`;

  // create text node 
  div.appendChild(document.createTextNode(message));

  // get div parent element
  const formSection = document.querySelector('#form-section')

  // get div sibling element
  const form = document.querySelector('#inventory-list');

  // append div to parent 
  formSection.insertBefore(div, form)

  // dismiss alert in 3secs
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)
}

// clear input fields prototype
UI.prototype.clearInputFields = function(){
  document.querySelector('#item').value = '';
  document.querySelector('#quantity').value = '';
  document.querySelector('#agent').value = '';
}

// delete item from inventory
UI.prototype.deleteItem = function(target){
  if(target.classList.contains('fa-trash')){
    target.parentElement.parentElement.remove();
  }
}

// event listener to get form submission
document.querySelector('#inventory-list').addEventListener('submit', e => {
  const item = document.querySelector('#item').value;
  const quantity = document.querySelector('#quantity').value;
  const agent = document.querySelector('#agent').value;

  // instantiate Item object
  const laptop = new Item(item, quantity, agent);

  // instantiate UI class
  const ui = new UI();

  // validate form field
  if(item === '' || quantity === '' || agent === ''){
    // display error message
    ui.displayAlert('Please fill in all fields', 'error');
  } else {  
    // add item to UI 
    ui.addItemToInventory(laptop);
    // display success message
    ui.displayAlert('item added successfully', 'success');
    // clear input fields
    ui.clearInputFields();
  }
  
  e.preventDefault();
});

// event listener to delete item
document.querySelector('#inventory-content').addEventListener('click', e => {
  
  // instantiate UI object 
  const ui = new UI();

  // invoke delete item prototype
  ui.deleteItem(e.target);

  // show alert
  ui.displayAlert('Item removed successfully', 'success');

  e.preventDefault();
})