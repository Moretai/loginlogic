import { handleActions } from 'redux-actions'
import Immutable from 'immutable'
import * as actions from '../action/login'

const initialState = Immutable.fromJS({
  fetching: false,
  fetched: false,
  data: null,
  error: null
})

export default handleActions({
  [actions.backendLoginRequest] (state) {
    return state.set('fetching',true)
  },
  [actions.backendLoginSuccess] (state,action) {
    return state.set('fetching',false)
                .set('fetched',true)
                .set('error',null)
                .set('data',action.payload)
  },
  [actions.backendLoginFailed] (state,action) {
    return state.set('fetching',false)
                .set('fetched',true)
                .set('data',null)
                .set('error',action.payload)
  }
}, initialState)
