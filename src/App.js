import React, { Component } from 'react'
import {message} from 'antd'
import {HashRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin'

class App extends Component {

   handleClick = () => {
      message.success('成功啦...');
    }
  
    render() {
      return (
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
             <Route path="/" component={Admin} />
          </Switch>
        </HashRouter>
      )
    }
  }
  
  export default App
  