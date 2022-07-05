import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/Api";
import Todo from "./Todo";
import Form from "./Form";

const App = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const fetchedTodos = await api.fetchAPI();
        setTodos([...fetchedTodos]);
    }

    const addTodo = async (data) => {
        const todo = { description: data, completed: false };
        await api.createAPI(todo);
        fetchTodos();
    }

    const deleteTodo = async (id) => {
        await api.deleteAPI(id);
        fetchTodos();
    }

    const editTodo = async (id, description, completed) => {
        await api.editAPI(id, description, completed);
        fetchTodos();
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