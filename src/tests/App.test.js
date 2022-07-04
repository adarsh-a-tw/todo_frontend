import { fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "../Components/App";
import '@testing-library/jest-dom/extend-expect';
import mockFetchTodos from "../mocks/fetchTodos";

describe("Basic Rendering of App component", () => {

    it("Displays Title", () => {
        const view = render(<App fetchAPI={mockFetchTodos}/>);
        expect(view.getByTestId("title")).toHaveTextContent("Todo App");
    });

    it("Display Counter", () => {
        const view = render(<App fetchAPI={mockFetchTodos}/>);
        expect(view.getByTestId("counter")).toHaveTextContent("3 todos displayed");
    });
});

describe("Basic Functionality of App component", () => {

    it("Render Todos", () => {
        const view = render(<App fetchAPI={mockFetchTodos}/>);
        expect(view.getAllByTestId("todo-div")).toHaveLength(3);
    });
});