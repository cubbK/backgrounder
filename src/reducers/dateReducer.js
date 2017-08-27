
function dateReducer (state = null, action) {
  switch (action.type) {
    case 'SUBSTRACT_DATE':
      const date = new Date(state)
      const result = new Date()
      result.setDate(date.getDate() - action.payload)
       // substracts n days from date
      return result.getTime() // returns date as a number
    default:
      return state
  }
}

export default dateReducer
