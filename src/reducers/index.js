import imagesReducer from './imagesReducer'
import {combineReducers} from 'redux'

export default combineReducers({
  images: imagesReducer
})
