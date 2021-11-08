let todos = []

const filters = {
    searchText: ''
}
const todosJSON = localStorage.getItem("todos")

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}


const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        if(todo.text.length > 0) {

        
        p.textContent = todo.text
    }
        else {
            p.textContent = "random todo";
        }
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false 
    })
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

 const hideCompleted = todos.filter(e=> e.completed)
 
document.querySelector("#checking").addEventListener("change", function(e){
    if(e.target.checked) {
        renderTodos(hideCompleted,filters)
    }else {
        renderTodos(todos,filters)
    }
})
/*
1.Create a checkbox and setup event listener -> Hide completed
2.Create new hideCompleted filter (default false)
3.Update hideCompleted an render list on checkbox change
4.Setup renderTodos to remove completed items

*/ 


//fetch exisitng todos from localStorage
//getSavedTodos


//save todos to local storage
//saveTodos

/* render app based on filters
    render todos
*/

/*
get the Dom elements for an invidualnote 
generateTodoDOM
*/


/*
Get the DOM elements for list summary
generateSummaryDOM


*/