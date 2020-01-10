function onPageLoaded() {
  let input = document.querySelector("input[type='text']");
  let ul = document.querySelector("ul.todos");
 
  function createToDo() {
    let li = document.createElement("li");
    let i = document.createElement("i");
    let newSpan = document.createElement("span");
    let secondSpan = document.createElement("span");
    newSpan.setAttribute("class", "todo-text");
    secondSpan.setAttribute("class", "todo-trash");
    i.setAttribute("class", "fas fa-trash-alt");
    ul.prepend(li);
    li.prepend(newSpan); 
    newSpan.innerHTML = input.value;
    li.append(secondSpan); 
    secondSpan.append(i); 
    DeleteTodo(secondSpan);
    getStrike(li);
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
    li.parentElement.remove(li);
    // li.parentNode.removeChild(li);  -  удаление по одному
  };
  
  let buttonDelete = buttons.querySelector(".clear");  
  buttonDelete.addEventListener("click", deleteAllTodo);
    
 
  // let buttonDeleteToDo = buttons.querySelector("span.todo-trash"); 
  // DeleteTodo(buttonDeleteToDo);  - не надо

  function DeleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        // event.stopPropagation();
    });
  }
  function getStrike(element) {
    element.addEventListener("click", (event) => {
       element.setAttribute("style", "text-decoration:line-through;")
        // event.stopPropagation();
    });
  }

 
};







window.onload = onPageLoaded;