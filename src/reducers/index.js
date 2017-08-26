import imagesReducer from './imagesReducer'
import dateReducer from './dateReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  images: imagesReducer,
  date: dateReducer
})
