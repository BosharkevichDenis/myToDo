function onPageLoaded() {
  let input = document.querySelector("input[type='text']");
  let ul = document.querySelector("ul.todos");
 
  function createToDo() {
    let li = document.createElement("li");
    let newSpan = document.createElement("span");
    let basket =  document.querySelector(".todo-trash");
    basket = basket.cloneNode(true);
    newSpan.setAttribute("class", "todo-text")
    newSpan.innerHTML = input.value;
    ul.prepend(li)
    li.prepend(newSpan); 
    li.append(basket);
    
  };

  let buttonSave = buttons.querySelector(".save"); 
  buttonSave.addEventListener("click", createToDo);

  input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
      createToDo();
    }
  });

  function deleteAllTodo() {     
    let li =  document.querySelector("li");
    li.parentNode.remove(li);
    // li.parentNode.removeChild(li);  -  удаление по одному
  };
  
  let buttonDelete = buttons.querySelector(".clear");  
  buttonDelete.addEventListener("click", deleteAllTodo);
  
 
  

  // function removeTodo() {
  //   let li =  document.querySelector("li");
  //   li.removeChild(li.lastChild);
  // };
  let clearBasket = document.querySelector(".todo-trash");  
  // clearBasket.addEventListener("click", removeTodo);
  
 
};







window.onload = onPageLoaded;