import { getTodos, setTodos } from "./data";

const mockDeleteTodo = (id) => {
    const todos = getTodos().filter(todo => todo.id !== id);
    setTodos(todos);
};

export default mockDeleteTodo;