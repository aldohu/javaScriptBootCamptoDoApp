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
/*
const leftTodos = todos.filter(e=> !e.completed).length;

let leftTodosParagraph = document.createElement("p");
leftTodosParagraph.textContent = `You have ${leftTodos} todos left.`
document.body.append(leftTodosParagraph)

todos.forEach(e=> {
    let para = document.createElement("p");
    para.textContent = `${e.text}`;
    document.body.append(para)
    
})*/

const button = document.querySelector("button");
button.addEventListener("click", function(e){
    console.log("Hello I am button");
})
