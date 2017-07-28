import { createAction } from 'redux-actions'


export const backendLoginRequest = createAction('backend/BACKEND_LOGIN')
export const backendLoginSuccess = createAction('backend/BACKEND_LOGIN_SUCCESS')
export const backendLoginFailed = createAction('backend/BACKEND_LOGIN_FAILED')
