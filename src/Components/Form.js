import React from "react";

const Form = () => {

    return <form>
        <div className="row">
            <div className="col">
                <textarea data-testid="form-textbox"></textarea>
            </div>
        </div>
        <div className="row">
            <div className="col">
               <button className="btn btn-danger" data-testid="form-add-btn">Add</button>
            </div>
        </div>
    </form>;
}

export default Form;