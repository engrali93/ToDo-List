
/*eslint-env es6*/ 
//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click",filterTodo);

// functions

function addTodo(event){
  //  Event.preventDeault();
    event.preventDefault();
   
    //todo div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);

    //mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class= "fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    tododiv.appendChild(completeButton);

    //delete button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    tododiv.appendChild(trashButton);

    //append to do list
    todoList.appendChild(tododiv);
    // clear todo input value
    todoInput.value = "";
}


// delete funcationality
function deleteCheck(e){
const item = e.target;
//delete
if(item.classList[0]=== 'trash-btn'){
  const todo = item.parentElement;
  //animation
  todo.classList.add("fall");
  todo.addEventListener('transitioned', function(){
    todo.remove();
  });
 
}
// for check list
if(item.classList[0]=== 'complete-btn'){
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}
}

//filter 
function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
   switch(e.target.value){
     case "all":
      todo.style.display = 'flex';
       break;
     case "completed":
       if(todo.classList.contains("completed")){
         todo.style.display = 'flex';
       } else{
        todo.style.display = 'none';
       }
       break;
     case "uncompleted":
      if(!todo.classList.contains("completed")){
        todo.style.display = 'flex';
      } else{
       todo.style.display = 'none';
      }   
      break;
   }
  });
}