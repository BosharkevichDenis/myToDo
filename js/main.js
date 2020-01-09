// function onPageLoaded() {
//   let input = document.querySelector("input[type='text']");
//   let ul = document.querySelector("ul.todos");


//   function createToDo() {
//     let li = document.createElement('li');
//     // li.setAttribute(class, value)
//     li.innerHTML = input.value;
//     ul.prepend(li); // вставить li в начало <ol>
//   };

//   let buttonSave = buttons.querySelector('.save'); 
//   buttonSave.addEventListener("click", createToDo);

//   input.addEventListener('keydown', function(event) {
//     if (event.code == 'Enter') {
//       createToDo();
//     }
//   });

// };

// function deleteAllTodo() {
//   let buttonDelete = buttons.querySelector('.clear');   
//   let ul = document.querySelector(".todo-text");

//   buttonDelete.addEventListener("click", ul.remove);
// }


// window.onload = onPageLoaded;


function onPageLoaded() {
  let input = document.querySelector("input[type='text']");
  let ul = document.querySelector("ul.todos");


  function createToDo() {
    let li = document.querySelector('li');
    li = li.cloneNode(true);
    li.textContent = input.innerHTML;
    
    
   
    ul.prepend(li); // вставить li в начало <ol>
  };

  let buttonSave = buttons.querySelector('.save'); 
  buttonSave.addEventListener("click", createToDo);

  input.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
      createToDo();
    }
  });

};

function deleteAllTodo() {
  let buttonDelete = buttons.querySelector('.clear');   
  let ul = document.querySelector(".todo-text");

  buttonDelete.addEventListener("click", ul.remove);
}


window.onload = onPageLoaded;