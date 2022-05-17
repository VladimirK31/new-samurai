import React from 'react'
import { NavLink } from 'react-router-dom'
import { FriendPropsType } from '../redux/Store'
import { FriendsSidebar } from './friendsSidebar/FriendsSidebar'
import s from './Navbar.module.css'
// export type NavbarPropsType = {
//   friendData: FriendPropsType[]
// }

export const Navbar = () => {
  // let friendsSidebarItem = stor.friendData.map((el) => (
  //   <FriendsSidebar id={el.id} photo={el.photo} name={el.name} />
  // ))
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
      {/* <div className={s.sidebar}>
        <h3 className={s.title}>FRIENDS</h3>
        {friendsSidebarItem}
      </div> */}
    </nav>
  )
}
