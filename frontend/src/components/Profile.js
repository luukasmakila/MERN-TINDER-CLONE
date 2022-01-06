import React, {useState, useEffect} from 'react'
import axios from '../axios'
import {Navigate, Link} from 'react-router-dom'

const Person = () => {
  const [person, setPerson] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [bio, setBio] = useState('')

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('authToken')
      const request = await axios.get('/api/private/user', {headers: {'authorization' : `Bearer ${token}`}})
      setPerson(request.data)
    }
    getData()
  }, [])

  const handleProfileChange = () => {
    console.log('hi')
  }

  return (
    <div className='profile-page'>
      <form className='profile-page-form'>
        <h3>Edit profile</h3>
        <div>
          <label htmlFor='name'>Change name: </label>
          <input 
            type="name"
            required
            id="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            tabIndex={1}
          />
        </div>
        <div>
          <label htmlFor='image'>Change image: </label>
          <input 
            type="text"
            required
            id="text"
            placeholder="Enter image URL"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            tabIndex={1}
          />
        </div>
        <div>
          <label htmlFor='bio'>Change bio: </label>
          <input 
            type="bio"
            required
            id="bio"
            placeholder="Enter bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            tabIndex={1}
          />
        </div>
      </form>
      <button type="submit" className="submit-changes">
          Save changes
        </button>
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
    <div className='profile_screen'>
      <Person />
      <Link to='/'><button>Back</button></Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
