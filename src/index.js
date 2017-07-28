import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { bindActionCreators } from 'redux'
import * as loginActions from './action/login'
import { Provider, connect } from 'react-redux'
import store from './store'
import LoginForm from './container/form/LoginForm'
import style from './style.scss'
import BgImage from './resource/imgs/14.png'
import logo from './resource/imgs/788.png'

@connect(
  state => ({
    userinfo: state.get('login')
  }),
  dispatch => ({
    actions: bindActionCreators(loginActions, dispatch)
  })
)

class App extends React.Component {

  submitFn(values) {
    console.log('%c values is','background: #222; color: #bada55',values)
    this.props.actions.backendLoginRequest(values)
  }

  render() {
    return(
      <div className="container" style={{backgroundImage:`url(${BgImage})`}}>
        <div className="contentWrap">
          <div className='logo'>
            <img src={logo} alt="数交所logo"/>
            <p className='titleName'>数交所后台管理系统</p>
          </div>
          <LoginForm onSubmit={this.submitFn.bind(this)}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
