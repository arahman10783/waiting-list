import {actions} from './actions'
const initialState = [
      {id: new Date().toJSON(),
      number: 1,
      status: 'waiting'}, 
      {id: new Date().toJSON() + 1,
        number: 2,
        status: 'waiting'}, 
]



const cutomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.newCustomer:
      return [...state, {
        id: new Date().toJSON(),
        number: state.length + 1,
        status: 'waiting'
      }]
    case actions.nextCustomer:
      const updated = state.find(el => el.id === action.payload.id)
      return [
        ...state.filter(el => el.id !== action.payload.id),
      {
        ...updated,
        status: action.payload.newState
      }
      ]
    default:
      return state;
  }
  
}


export default cutomerReducer