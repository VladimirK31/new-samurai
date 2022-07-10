import React from 'react'
import { NavLink } from 'react-router-dom'
import { FriendsSidebarContainer } from './friendsSidebar/FriendsSidebarContainer'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink to="/profile">PROFILE</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="dialogs">MESSAGE</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music">MUSIC</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="news">NEWS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings">SETTINGS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="users">USERS</NavLink>
      </div>
      {/* <FriendsSidebarContainer /> */}
    </nav>
  )
}
