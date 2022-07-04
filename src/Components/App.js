import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";

const App = (props) => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function effect() {
            const fetchedTodos = await props.fetchAPI();
            setTodos(fetchedTodos);
        }
        effect();
    }, []);

    const addTodo = async (data) => {
        const todo = { description: data, completed: false };
        await props.createAPI(todo);
        const fetchedTodos = await props.fetchAPI();
        setTodos([...fetchedTodos]);
    }

    const deleteTodo = async (id) => {
        await props.deleteAPI(id);
        const fetchedTodos = await props.fetchAPI();
        setTodos([...fetchedTodos]);
    }

    const editTodo = async (id, description, completed) => {
        await props.editAPI(id, description, completed);
        const fetchedTodos = await props.fetchAPI();
        setTodos([...fetchedTodos]);
    }

    return (
        <div className="todoapp stack-large">
            <div>
                <center><h1 data-testid="title">Todo App</h1></center>
            </div>
            <Form addTodo={addTodo} />
            <h4 data-testid="counter">{todos.length} todos displayed</h4>
            <div>
                <ul role="list"
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                    data-testid="todo-list">
                    {todos.map((todo, index) =>
                        <Todo key={index} id={todo.id} description={todo.description} completed={todo.completed} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )}
                </ul>
            </div>

        </div>
    );
}

export default App;