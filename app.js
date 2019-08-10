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

  e.preventDefault();
});