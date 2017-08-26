function imagesReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [...state, action.payload]
    default:
      return state
  }
}

export default imagesReducer
