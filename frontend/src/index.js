import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign_up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
)
