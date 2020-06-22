import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
// Provider - обертка со всем стейтом
import {Provider} from 'react-redux';
// creareStore - создание ГЛОБАЛЬНОГО СТЕЙТА
// compose - Объединяет функции справа налево
import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//------------------------------
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware (
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);

