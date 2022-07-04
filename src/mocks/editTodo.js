import { getTodos, setTodos } from "./data";

const mockEditTodo = (id, description, completed) => {
    const todos = getTodos().map(todo => {
        if (id === todo.id)
            return { id: id, description: description, completed: completed };
        return todo;
    })
    setTodos(todos);
};

export default mockEditTodo;