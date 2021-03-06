import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import { Header } from './components/header/Header'
import HeaderContainer from './components/header/HeaderContainer'
import { Login } from './components/login/Login'
import { Music } from './components/music/Music'
import { Navbar } from './components/navbar/Navbar'
import { News } from './components/news/News'
import ProfileContainer from './components/profile/ProfileContainer'
import { Settings } from './components/settings/Settings'
import { UsersContainer } from './components/users/UsersContainer'

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
