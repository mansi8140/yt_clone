import React from 'react'
import './_header.scss'
import {FaBars} from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
const Header = () => {
  return (
    <div className='header'>
      <FaBars className='header_menu' size={26} />
        <img 
          src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' 
          className='header_logo'
          alt= '' />

        <form>
            <input type='text' placeholder='Serach' />
            <button type='submit'>
              <AiOutlineSearch size={22}/>
            </button>
        </form>

        <div className='header_icons'>
          <MdNotifications size ={26} />
          <MdApps size={26}/>
          <img 
            src='https://www.looper.com/img/gallery/the-untold-truth-of-neytiri-from-avatar/intro-1652914528.webp'
            alt='user'
          />

        </div>
    </div>
  )
}

export default Header
