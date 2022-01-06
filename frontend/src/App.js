import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import { Navigate } from 'react-router-dom'

const App = () => {
  if(!localStorage.getItem('authToken')) {
    return (
      <Navigate to='/login'/>
    )
  }
  return (
    <div className="app">
      <Header/>
      <Users/>
    </div>
  )
}

export default App