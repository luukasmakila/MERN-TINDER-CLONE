import React from "react"
import './App.css'
import Header from "./components/Header"
import Cards from "./components/Cards"
import FooterButtons from "./components/FooterButtons"

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Cards/>
      <FooterButtons/>
    </div>
  )
}

export default App