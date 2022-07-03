import React from "react";

const Todo = (props) => {
    return <div className="row">
        <div className="col-1">
            {props.completed ? <input type="checkbox" data-testid={`todo-checkbox-${props.id}`} checked /> : <input type="checkbox" data-testid={`todo-checkbox-${props.id}`} />}
        </div>
        <div className="col-8">
            <p data-testid={`todo-desc-${props.id}`}>{props.description}</p>
        </div>
        <div className="col-3">
            <button data-testid={`todo-edit-btn-${props.id}`} className='btn btn-primary'>Edit</button>
            <button data-testid={`todo-del-btn-${props.id}`} className='btn btn-danger'>Delete</button>
        </div>
    </div>;
}

export default Todo;