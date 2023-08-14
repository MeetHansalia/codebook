import React from 'react'
import taskmate from '../assets/taskmate.png'
import './Header.css'


const Header = () => {
  return (
    <header>
        <img src={taskmate} alt=""/>
        <a href="/">Home</a>
    </header>
  )
}

export default Header
