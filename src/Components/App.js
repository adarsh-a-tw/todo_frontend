import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";

const App = (props) => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchedTodos = props.fetchAPI();
        setTodos(fetchedTodos);
    }, []);
    return (
        <div className="todoapp stack-large">
            <div>
                <center><h1 data-testid="title">Todo App</h1></center>
            </div>
            <div>
                <h2 data-testid="counter">{todos.length} todos displayed</h2>
            </div>
            <div>
                <ul role="list"
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                    data-testid="todo-list">
                    {todos.map((todo, index) =>
                        <Todo key={index} id={todo.id} description={todo.description} completed={todo.completed} />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;