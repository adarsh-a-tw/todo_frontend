import { render } from "@testing-library/react";
import React from "react";
import Form from "../Components/Form";
import '@testing-library/jest-dom/extend-expect';

describe("Testing basic rendering of Form Component", () => {

    it("Has a textbox", () => {
        const view = render(<Form />);
        expect(view.getByTestId("form-textbox")).toBeDefined();
        expect(view.getByTestId("form-textbox")).toBeVisible();
    });

    it("Has an Add button", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("form-add-btn")).not.toBeDisabled();
    });

});