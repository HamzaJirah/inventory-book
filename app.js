// Item constructor 
function Item (item, qauntity, agent){
  this.item = item;
  this.qauntity = qauntity;
  this.agent = agent;
}

// UI construtor 
function UI(){}

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