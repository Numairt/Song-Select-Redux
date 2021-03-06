import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

ReactDOM.render(
    <Provider store={createStore(reducers)} >
    <App/>
    </Provider>
    , 
    document.querySelector('#root'));