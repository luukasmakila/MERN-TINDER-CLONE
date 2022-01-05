import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
)
