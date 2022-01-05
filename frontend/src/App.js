import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import FooterButtons from "./components/FooterButtons"

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Users/>
      <FooterButtons/>
    </div>
  )
}

export default App