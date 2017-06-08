import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const defaultConfig = {
  deleteTaskWithoutConfirm: false,
  version: '0.0.1',
  creator: 'Andrey Sanatullov',
  appName: 'Todo app'
};

/*
* App Init
*/
// check localStorage
const configFromStorage = {};
// load data from localStorage


// if localStorage is empty then load default params
localStorage.lastId = 0;

// global app configs (sync with localStorage)


const appReducer = combineReducers({
  config,
  localStorage
});
const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);
registerServiceWorker();
