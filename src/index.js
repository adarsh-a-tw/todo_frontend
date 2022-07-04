import {render} from 'react-dom';
import React from 'react';
import App from './Components/App';
import './index.css';
import mockFetchTodos from './mocks/fetchTodos';
import mockCreateTodo from './mocks/createTodo';

render(<App fetchAPI={mockFetchTodos}  createAPI={mockCreateTodo}/>, document.getElementById('app'));