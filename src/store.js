import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const preloadedState = {}

export default createStore(reducer, preloadedState, composeWithDevTools(
  applyMiddleware(promiseMiddleware(), thunk)
))
