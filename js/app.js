
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list'); //




todoBtn.addEventListener('click', addTodo)



function addTodo(event) {



    event.preventDefault();  //prevents form from submitting
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");



    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);



    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="far fa-check-square"></i>';
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn);



    //check trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn')
    todoDiv.appendChild(trashBtn);

    //append to todo ul list

    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";
}


//to delete the todo when the trash button is clicked

todoList.addEventListener('click', deleteCheck);

function deleteCheck(e) {
    const item = e.target; //know about target properties.


    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }


    //check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

