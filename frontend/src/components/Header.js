import React from 'react'
import '../styles/Header.css'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
      <Link to='/add-user'>
        <IconButton>
          <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>
      </Link>
      <img 
        className='header_logo'
        src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg'
        alt=''
      />
      <IconButton>
        <ChatIcon fontSize='large' className='header_icon'/>
      </IconButton>
    </div>
  )
}

export default Header