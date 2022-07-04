import { fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "../Components/App";
import '@testing-library/jest-dom/extend-expect';
import mockFetchTodos from "../mocks/fetchTodos";
import mockCreateTodo from "../mocks/createTodo";

describe("Basic Rendering of App component", () => {

    it("Displays Title", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo}/>);
        expect(view.getByTestId("title")).toHaveTextContent("Todo App");
    });

    it("Display Counter", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo}/>);
        expect(view.getByTestId("counter")).toHaveTextContent("3 todos displayed");
    });

    it("Render Todos", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo}/>);
        expect(view.getAllByTestId("todo-div")).toHaveLength(3);
    });

    it("Render Form", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo}/>);
        expect(view.getAllByTestId("form")).toBeDefined();
    });
});

describe("Basic Functionality of App component",()=>{

    it("Add Todo",()=>{
        const view = render(<App fetchAPI={mockFetchTodos}  createAPI={mockCreateTodo}/>);
        const data = "Hello World";
        view.getByTestId(`form-textbox`).setAttribute("value", data);
        view.getByTestId('form-add-btn').click();
        expect(view.getAllByTestId("todo-div")).toHaveLength(4);
        expect(view.getByTestId("counter")).toHaveTextContent("4 todos displayed");
    });
})