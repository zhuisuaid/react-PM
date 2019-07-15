import React, { Component } from 'react'
import PropTypes from 'antd'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'

import Login from './pages/login/login.jsx'
class App extends Component {

    // handleClick = () => {
    //   message.success('成功啦...');
    // }
  
    render() {
      return (
        <HashRouter>
          <Switch>
            <Route path="/" component={Login} />
            {/* <Route path="/" component={Admin} /> */}
          </Switch>
        </HashRouter>
      )
    }
  }
  
  export default App
  