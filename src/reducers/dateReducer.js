import date from 'date-and-time'

const now = new Date()
const initialState = date.format(now, 'YYYY/MM/DD')

function dateReducer (state = initialState, action) {
  switch (action.type) {
    case 'SUBSTRACT_DATE':
      let dateObj = date.parse(state, 'YYYY/MM/DD')
      dateObj = date.addDays(dateObj, -1)
      return date.format(dateObj, 'YYYY/MM/DD')
    default:
      return state
  }
}

export default dateReducer
