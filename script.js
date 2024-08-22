(() => {
  let toDoListArray = [];
  const form = document.querySelector('.form');
  const input = document.querySelector('.form_input');
  const ul = document.querySelector('.toDoList');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let itemId = String(Date.now()); // Corrected 'string' to 'String' and renamed 'item' to 'itemId'
    let toDoItem = input.value;
    addItemTOdom(itemId, toDoItem);
    addItemToArray(itemId, toDoItem);
    input.value = '';
  });

  ul.addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-id');
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  function addItemTOdom(itemId, toDoItem) {
    const li = document.createElement('li');
    li.setAttribute('data-id', itemId); // Corrected syntax: added a comma between 'data-id' and 'itemId'
    li.innerText = toDoItem;
    ul.appendChild(li);
  }

  function addItemToArray(itemId, toDoItem) {
    toDoListArray.push({ itemId, toDoItem }); // Corrected spacing in the object
    console.log(toDoListArray);
  }

  function removeItemFromDOM(id) {
    var li = document.querySelector('[data-id="' + id + '"]'); // Added 'id' inside the query selector
    ul.removeChild(li);
  }

  function removeItemFromArray(id) {
    toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
    console.log(toDoListArray);
  }
})();
