import React from 'react'
import { reduxForm , Field} from 'redux-form/es/immutable'
import style from './style.scss'

const validate = values => {
  const errors = {}
  if (!values.get('username')) {
    errors.username = 'Username Required'
  } else if (values.get('username').length < 1) {
    errors.username = 'More than 1 characters'
  }

  if (!values.get('password')) {
    errors.password = 'password Required'
  } else if (values.get('password').length < 1) {
    errors.password = 'More than 1 characters'
  }

  return errors
}

const renderField = ({ input, label, type, meta: { touched, error }}) => (
  <div className="inputItem">
    <label>{label}</label>
      <input {...input} type={type} placeholder={`${label}`==="用户名" ? "请输入账号" : "请输入密码"}/>
      {touched && error && <span className='errorInfo'>{error}</span>}
  </div>
)


const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="formBlock">
      <h2>登录后台管理系统</h2>
      <Field name='username' type='text' component={renderField} label='用户名' />
      <Field name='password' type='password' component={renderField} label='密码'/>
      <div className='btnWrap'>
        <button type='submit' disabled={submitting}>登录</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'backendLoginForm',
  validate
})(LoginForm)
