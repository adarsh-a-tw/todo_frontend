import React, { useState } from "react";

const Todo = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editTodo(props.id, data, props.completed);
        setIsEditing(false);
        setData('');
    }

    const handleCheckbox = (completed) => {
        props.editTodo(props.id, props.description, completed);
    }

    if (isEditing)
        return <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.description}
                </label>
                <input id={props.id} data-testid="update-box" className="todo-text" type="text" onChange={(event) => setData(event.target.value)} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setIsEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {props.text}</span>
                </button>
                <button type="submit" data-testid="update-submit-btn" className="btn btn__primary todo-edit" onClick={handleSubmit}>
                    Save
                    <span className="visually-hidden">new name for {props.description}</span>
                </button>
            </div>
        </form>;
    else
        return <li data-testid={"todo-div"} className="todo stack-small">
            <div className="c-cb">
                <input type="checkbox" id={`todo-checkbox-${props.id}`} data-testid={`todo-checkbox-${props.id}`} defaultChecked={props.completed} onChange={()=>handleCheckbox(!props.completed)} />
                <label className='todo-label' htmlFor={`todo-checkbox-${props.id}`} data-testid={`todo-desc-${props.id}`}>{props.description}</label></div>
            <div className="btn-group">
                <button data-testid={`todo-edit-btn-${props.id}`} className='btn btn__primary' onClick={() => setIsEditing(true)}>Edit</button>
                <button data-testid={`todo-del-btn-${props.id}`} className='btn btn__danger' onClick={() => props.deleteTodo(props.id)}>Delete</button>
            </div>
        </li>;
}

export default Todo;