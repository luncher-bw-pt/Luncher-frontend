import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { schoolReducer } from './reducers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const store = createStore(schoolReducer,
    applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));