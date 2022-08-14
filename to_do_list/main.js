// selectors
const todoInput = document.querySelector(".todo-input");
const todobuttom = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo")

// Event listner

todobuttom.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);
filteroption.addEventListener('click',filtertodo);

//function
function addtodo(event)
{
    event.preventDefault()
// cerate a div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    // creat li
    const newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    // check button
    const compltedbutton = document.createElement("button");
    compltedbutton.innerHTML = '<i class = "fas fa-check"></i>';
    compltedbutton.classList.add("complete-btn");
    tododiv.appendChild(compltedbutton);
    // delete button
    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class = "fas fa-trash"></i>';
    deletebutton.classList.add("trash-btn");
    tododiv.appendChild(deletebutton);
// append to list
todolist.appendChild(tododiv);
// clear todo input
todoInput.value = " "
}
function deletecheck(e){
    const item = e.target;

    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        // todo.remove();
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filtertodo(e){
    const todos = todolist.childNodes;
    // console.log(todos);
    todos.forEach(function(todo){
        const mstyle = todo.style;
        if(mstyle != undefined && mstyle != null){
        switch(e.target.value){
            case "all":
                mstyle.display ='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    mstyle.display ='flex';
                }else{
                    mstyle.display ='none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    mstyle.display ='flex';
                }else{
                    mstyle.display ='none';
                }
                break;
        }
    }
    });
}
