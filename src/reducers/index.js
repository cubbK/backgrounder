import sectionReducer from './sectionReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  section: sectionReducer
})
