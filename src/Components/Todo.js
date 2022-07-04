import React from "react";

const Todo = (props) => {
    return <li data-testid={"todo-div"} className="todo stack-small">
        <div className="c-cb">
            {props.completed ? <input type="checkbox" id={`todo-checkbox-${props.id}`} data-testid={`todo-checkbox-${props.id}`} checked /> : <input type="checkbox" data-testid={`todo-checkbox-${props.id}`} />}
            <label className='todo-label' htmlFor={`todo-checkbox-${props.id}`} data-testid={`todo-desc-${props.id}`}>{props.description}</label></div>
        <div className="btn-group">
            <button data-testid={`todo-edit-btn-${props.id}`} className='btn btn__primary'>Edit</button>
            <button data-testid={`todo-del-btn-${props.id}`} className='btn btn__danger'>Delete</button>
        </div>
    </li>;
}

export default Todo;