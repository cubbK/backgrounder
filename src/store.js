import { createStore } from 'redux'
import reducer from './reducers'

const preloadedState = {
  activeSection: 0
}
export default createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
