import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { books } from './store/reducers';
import { State } from './model';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore<State>(
    books,
    { books: [] },
    composeEnhancers(
        applyMiddleware(thunk)
    ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
