import React, {useState, useEffect} from 'react'
import axios from '../axios'
import {Navigate, Link} from 'react-router-dom'

const Profile = () => {
  const [success, setSuccess] = useState(false)
  const [person, setPerson] = useState('')

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('authToken')
      const request = await axios.get('/api/private/user', {headers: {'authorization' : `Bearer ${token}`}})
      setPerson(request.data)
    }
    getData()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setSuccess(true)
  }

  if(success) {
    return <Navigate to='/'/>
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <img 
        className='profile-picture'
        src={person.imgUrl}
        alt=''
      />
      <h4>{person.bio}</h4>
      <Link to='/'><button>Back</button></Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
