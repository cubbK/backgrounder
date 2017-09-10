const initialState = {
  imagesData: [],
  pending: false
}

function imagesReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMAGE_PENDING':
      return {...state, pending: true}

    case 'FETCH_IMAGE_FULFILLED':
      let newState = {...state}
      newState.imagesData.push(action.payload.data)
      newState.pending = false
      return newState
<<<<<<< HEAD
    case 'FETCH_IMAGE_REJECTED':
      console.log('rejected fetch')
      return state
=======

>>>>>>> a58681f4dd9fee0a25381a3a67e3e59904038709
    default:
      return state
  }
}

export default imagesReducer
