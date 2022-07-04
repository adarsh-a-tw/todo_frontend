let todos = [
    { id: 1, description: "Sample Todo 1", completed: true },
    { id: 2, description: "Sample Todo 2", completed: false },
    { id: 3, description: "Sample Todo 3", completed: false }
];


const getTodos = ()=> {
    return todos;
}

const setTodos = (updated_todos)=> {
    todos = updated_todos;
}

module.exports = {setTodos,getTodos};