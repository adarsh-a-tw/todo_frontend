import { getTodos, setTodos } from "./data";

const mockCreateTodo = (todo) => {
    const todos = getTodos();
    todo = { id: todos.length + 1, ...todo };
    todos.push(todo);
    setTodos(todos);
};

export default mockCreateTodo;