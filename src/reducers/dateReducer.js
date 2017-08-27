function dateReducer (state = null, action) {
  switch (action.type) {
    case 'SUBSTRACT_DATE':
      const date = new Date(state)
      console.log(date.getTime())
      return date.getTime() - 1440000
    default:
      return state
  }
}

export default dateReducer
