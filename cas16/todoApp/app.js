// ~~~~~~~~~~~~ VARIABLES ~~~~~~~~~~~~
const todoInput = document.querySelector(`#todo-input`);
const addTodoBtn = document.querySelector(`#add-btn`);
const todoList = document.querySelector(`#todo-list`);
let todoItems = [];

// ~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~
function Todo(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
}

function addNewTodo() {
    let todoInputValue = todoInput.value;

    if(!todoInputValue) {
        alert(`Please enter value`);
        return;
    }

    let newTodo = new Todo(todoInputValue, false);
    todoItems.push(newTodo);
    todoInput.value = ``;
}

function renderTodos() {
    todoList.innerHTML = ``;
    let htmlBulder = ``;

    for(let i = 0; i < todoItems.length; i++) {
        let todo = todoItems[i];

        htmlBulder += `<li>`;

        if(todo.isCompleted) {
            htmlBulder += `
            <input type="checkbox" data-todoindex="${i}" checked>
            <span><del>${todo.name}</del></span>
            `
        } else {
            htmlBulder += `
            <input type="checkbox" data-todoindex="${i}">
            <span>${todo.name}</span>
            `
        }

        htmlBulder += `</li>`;
    }

    todoList.innerHTML = htmlBulder;
}

function toggleTodoStatus(index) {
    let todo = todoItems[index];
    todo.isCompleted = !todo.isCompleted;
}

// ~~~~~~~~~~~~ EVENTS ~~~~~~~~~~~~
addTodoBtn.addEventListener(`click`, function(event) {
    console.log(event);
    
    addNewTodo();

    if(todoItems.length > 0) {
        renderTodos();
    }
})

todoList.addEventListener(`change`, function(e) {
    console.log(e);
    console.log(e.target.dataset);
    
    let todoIndex = e.target.dataset.todoIndex;
    toggleTodoStatus(todoIndex);
    renderTodos();
})