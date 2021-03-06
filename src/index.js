import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import rootSaga from './redux/sagas'
import inputApp from './redux/reducers'
import App from './App'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(inputApp, applyMiddleware(sagaMiddleware))
// let store = createStore(inputApp);

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('create-article-form')
)
