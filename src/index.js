import {render} from 'react-dom';
import React from 'react';
import App from './Components/App';
import './index.css';
import mockFetchTodos from './mocks/fetchTodos';

render(<App fetchAPI={mockFetchTodos}/>, document.getElementById('app'));