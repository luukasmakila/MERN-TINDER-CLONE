import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'

const Chat = () => {
  return (
    <div>
      <Header/>
      <h1>This is the chat area</h1>
      <Link to='/'><button>Go back</button></Link>
    </div>
  )
}

export default Chat
