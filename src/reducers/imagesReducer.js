import { filter } from 'ramda'

const initialState = {
  imagesData: [],
  pending: false,
  hoverImageId: null
}

function imagesReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMAGE_PENDING':
      return {...state, pending: true}
    case 'FETCH_IMAGE_FULFILLED':
      let newState = {...state}
      if (action.payload.data.media_type !== 'video') {
        isNotDuplicate(action.payload.data, state.imagesData) && 
        newState.imagesData.push(action.payload.data)
      }
      newState.pending = false
      return newState
    case 'FETCH_IMAGE_REJECTED':
      console.log('rejected fetch')
      return {...state, pending: false}
    case 'CHANGE_HOVER_IMAGE_ID':
      return {...state, hoverImageId: action.payload}
    default:
      return state
  }
}

function isNotDuplicate (obj, list) {
  const listWithTheSameDate = filter(objList => obj.date === objList.date, list)
  return listWithTheSameDate.length === 0 ? true : false
}

export default imagesReducer
