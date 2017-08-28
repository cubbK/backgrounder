function dateReducer (state = null, action) {
  switch (action.type) {
    case 'SUBSTRACT_DATE':
      const date = new Date(state)
      const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)
      return newDate.getTime()
    default:
      return state
  }
}

export default dateReducer
