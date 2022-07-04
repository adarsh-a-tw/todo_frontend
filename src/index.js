import {render} from 'react-dom';
import React from 'react';
import App from './Components/App';
import './index.css';
import mockFetchTodos from './mocks/fetchTodos';
import mockCreateTodo from './mocks/createTodo';
import mockDeleteTodo from './mocks/deleteTodo';
import mockEditTodo from './mocks/editTodo';

render(<App fetchAPI={mockFetchTodos}  createAPI={mockCreateTodo} deleteAPI={mockDeleteTodo} editAPI={mockEditTodo}/>, document.getElementById('app'));