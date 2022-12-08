import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import "./index.css" 
import { legacy_createStore as createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Component/Reducer'
const store = createStore(Reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App />
    </Provider>
)

