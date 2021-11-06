const todos = [
    {
        text: "Order cat food",
        completed: false
    },
    {
        text: "Clean kitchen",
        completed: true
    },
    {
        text: "Buy food",
        completed: true
    },
    {
        text: "Do work",
        completed: false
    },
    {
        text: "Exercise",
        completed: true
    }
];
const filter = {
        searchText: ""
};

const renderTodos = function (todos,filter) {
    const filteredTodos = todos.filter(e=> e.text.toLowerCase().includes(filter.searchText.toLowerCase()));
    console.log(filteredTodos);
const divTodo = document.querySelector("#todo");
divTodo.innerHTML = "";
filteredTodos.forEach(e=> {
        const p = document.createElement("p");
        p.textContent = e.text;
        divTodo.append(p)
    })

}







const button = document.querySelector("#add-todo");
button.addEventListener("click", function(e){
    console.log("Hello I am button");
})
renderTodos(todos,filter);

document.querySelector("#filter-todos").addEventListener("input", function(e){
    filter.searchText = e.target.value;
   renderTodos(todos,filter);
})

/*
1. Setup div contain for todos
2. Setup filters (SearchText ) and wire up a new filter input to change it
3. Create a renderTodos function to render and rerender the latest fiter data


*/ 