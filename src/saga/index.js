import { put , call, all, takeLatest} from 'redux-saga/effects'
import { postData } from '../util/fetchDate'
import * as loginActions from '../action/login'

function* helloSaga() {
  yield call(console.log, '%c helloSaga is run ')
}

function* loginAsync(action) {

    try {
      const formData = action.payload.toJS()
      const data = yield call( postData, 'http://localhost:8888/login',formData)
      if ( data.success === 1) {
        yield put(loginActions.backendLoginSuccess(data.data))
      } else {
        yield put(loginActions.backendLoginFailed(data.info))
      }
    }
    catch (e) {
        yield put(loginActions.backendLoginFailed(e.message))
    }
}

function* watchLogin() {
  yield takeLatest(loginActions.backendLoginRequest().type,loginAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchLogin()
  ])
}
