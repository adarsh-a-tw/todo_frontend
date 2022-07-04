import React, { useState } from "react";


const Form = ( props) => {
    const [data, setData] = useState('');

    const onChangeHandler = (event) => setData(event.target.value);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.addTodo(data);
        setData('');
        document.getElementById('new-todo-input').value = '';
    }

    return <form data-testid="form" onSubmit={onSubmitHandler}>
        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
            </label>
        </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            data-testid="form-textbox"
            onChange={onChangeHandler}
        />
        <button type="submit" className="btn btn__primary btn__lg" data-testid="form-add-btn">
            Add
        </button>
    </form>;
}

export default Form;