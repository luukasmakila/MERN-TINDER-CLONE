import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'

const Profile = () => {
  const [success, setSuccess] = useState(false)
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setSuccess(true)
  }

  if(success) {
    return <Navigate to='/'/>
  }
  else {
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
}

export default Profile
