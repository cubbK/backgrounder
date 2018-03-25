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

export default imagesReducer
