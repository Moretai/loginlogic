import loginReducer from './login'
import { reducer as formReducer } from 'redux-form/es/immutable'
import { combineReducers } from 'redux-immutablejs'

export default combineReducers({
  form: formReducer,
  login: loginReducer
})
