// import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import allSaga from '../saga'
import reducer from '../reducer'



const sagaMiddleware = createSagaMiddleware()
const store =  createStore(
  reducer,
  compose(
    // applyMiddleware(sagaMiddleware,createLogger()),
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(allSaga)

export default store
