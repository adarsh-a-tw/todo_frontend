import { render } from "@testing-library/react";
import React from "react";
import ToDo from "../Components/Todo";
import '@testing-library/jest-dom/extend-expect';

describe("Testing basic rendering of ToDo Component", () => {

    it("Can display todo text", () => {
        const hello = "Hello";
        const {getByTestId} = render(<ToDo description={hello} id="1" />);
        expect(getByTestId(`todo-desc-${1}`)).toHaveTextContent(hello);
    });

    it("Can render checkbox with checked attribute", () => {
        const { getByTestId } = render(<ToDo id="1" completed={true} />);
        expect(getByTestId("todo-checkbox-1")).toBeChecked();
    });

    it("Can render edit and delete clickable buttons", () => {
        const { getByTestId } = render(<ToDo id="1" />);
        expect(getByTestId("todo-edit-btn-1")).not.toHaveAttribute("disabled");
        expect(getByTestId("todo-del-btn-1")).not.toHaveAttribute("disabled");
    });

});