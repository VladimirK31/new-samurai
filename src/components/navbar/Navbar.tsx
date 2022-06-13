import React from 'react'
import { NavLink } from 'react-router-dom'
import { FriendsSidebarContainer } from './friendsSidebar/FriendsSidebarContainer'
import s from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="dialogs">Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="users">Users</NavLink>
      </div>
      <FriendsSidebarContainer />
    </nav>
  )
}
