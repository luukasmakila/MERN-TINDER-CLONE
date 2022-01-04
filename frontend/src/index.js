import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AddUser from "./components/AddUser"
import './styles/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/add-user' element={<AddUser/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
)
