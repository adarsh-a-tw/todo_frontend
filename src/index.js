import { render } from 'react-dom';
import React from 'react';
import App from './Components/App';
import './index.css';
import api from './api/Api';

render(<App fetchAPI={api.fetchAPI} createAPI={api.createAPI} deleteAPI={api.deleteAPI} editAPI={api.editAPI} />, document.getElementById('app'));