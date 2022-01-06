import React from 'react'
import '../styles/FooterButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CancelIcon from '@mui/icons-material/Cancel';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { IconButton } from '@mui/material'

const FooterButtons = () => {
  return (
    <div className='footerButtons'>
      <IconButton className='cancel_icon'>
        <CancelIcon fontSize='large'/>
      </IconButton>
      <IconButton className='replay_icon'>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='star_icon'>
        <StarIcon fontSize='large'/>
      </IconButton>
      <IconButton className='favorite_icon'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='flash_icon'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default FooterButtons
