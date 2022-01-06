import React, {useState, useEffect} from 'react'
import axios from '../axios'
import {Navigate, Link} from 'react-router-dom'

const Person = () => {
  const [person, setPerson] = useState('')

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('authToken')
      const request = await axios.get('/api/private/user', {headers: {'authorization' : `Bearer ${token}`}})
      setPerson(request.data)
    }
    getData()
  }, [])

  return (
    <div>
      <h2>{person.name}</h2>
      <img 
        className='profile-picture'
        src={person.imgUrl}
        alt=''
      />
      <h4>{person.bio}</h4>
    </div>
  )
}

const Profile = () => {
  const [logout, setLogout] = useState(false)
  if(!localStorage.getItem('authToken')) {
    return (
      <Navigate to='/login'/>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    setLogout(true)
  }

  if(logout) {
    return <Navigate to='/'/>
  }

  return (
    <div>
      <Person />
      <Link to='/'><button>Back</button></Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
