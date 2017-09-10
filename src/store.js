import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import loggerMiddleware from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const preloadedState = {
  date: Date.now()
}

export default createStore(reducer, preloadedState, composeWithDevTools(
  applyMiddleware(promiseMiddleware(), thunk, loggerMiddleware)
))
