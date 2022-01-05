import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './components/Profile'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
)
