import { USER_LOGIN } from '../actions';

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN:
     return {
       ...state,
       user: action.payload
     }
    default:
     return {
      state
     }
  }
}