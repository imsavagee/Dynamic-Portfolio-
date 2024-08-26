import React from 'react'
import { motion } from 'framer-motion'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'
function Navbar() {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />

      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >Shavez Ahmed</motion.span>
        <div className='social'>
          <a href='https://www.facebook.com/profile.php?id=100007259733787' target='_blank'><img src='./facebook.png' alt='facebook' /></a>
          <a href='https://www.instagram.com/_i_m_savage/?next=%2F' target='_blank'><img src='./instagram.png' alt='Intagram' /></a>
          <a href='https://www.youtube.com/' target='_blank'><img src='./youtube.png' alt='YouTube' /></a>
          <a href='#'><img src='/dribbble.png' alt='Dribble' /></a>

        </div>
      </div>

    </div>
  )
}

export default Navbar