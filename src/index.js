import React from 'react'
import ReactDOM from 'react-dom'
import './core/index.css'
import App from './core/App'
import * as serviceWorker from './core/serviceWorker'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line

// Redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { combinedReducers } from './redux'
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = window.location.href.includes('localhost')
  ? applyMiddleware(thunk, multi, promise)(createStore)(
      combinedReducers,
      devTools
    )
  : applyMiddleware(thunk, multi, promise)(createStore)(combinedReducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
