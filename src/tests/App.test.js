import { fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "../Components/App";
import '@testing-library/jest-dom/extend-expect';
import mockFetchTodos from "../mocks/fetchTodos";
import mockCreateTodo from "../mocks/createTodo";
import mockDeleteTodo from "../mocks/deleteTodo";

describe("Basic Rendering of App component", () => {

    it("Displays Title", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo}/>);
        expect(view.getByTestId("title")).toHaveTextContent("Todo App");
    });

    it("Display Counter", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo}/>);
        expect(view.getByTestId("counter")).toHaveTextContent("3 todos displayed");
    });

    it("Render Todos", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo}/>);
        expect(view.getAllByTestId("todo-div")).toHaveLength(3);
    });

    it("Render Form", () => {
        const view = render(<App fetchAPI={mockFetchTodos} createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo}/>);
        expect(view.getAllByTestId("form")).toBeDefined();
    });
});

describe("Basic Functionality of App component",()=>{

    it("Delete Todo",()=>{
        const view = render(<App fetchAPI={mockFetchTodos}  createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo}/>);
        view.getByTestId('todo-del-btn-1').click();
        expect(view.getAllByTestId("todo-div")).toHaveLength(2);
        expect(view.getByTestId("counter")).toHaveTextContent("2 todos displayed");
    });

    it("Add Todo",()=>{
        const view = render(<App fetchAPI={mockFetchTodos}  createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo}/>);
        const data = "Hello World";
        view.getByTestId(`form-textbox`).setAttribute("value", data);
        view.getByTestId('form-add-btn').click();
        expect(view.getAllByTestId("todo-div")).toHaveLength(3);
        expect(view.getByTestId("counter")).toHaveTextContent("3 todos displayed");
    });
})