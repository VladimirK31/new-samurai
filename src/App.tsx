import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dialogs } from './components/dialogs/Dialogs'
import { DialogsContainer } from './components/dialogs/DialogsContainer'
import { Header } from './components/header/Header'
import { Music } from './components/music/Music'
import { Navbar } from './components/navbar/Navbar'
import { News } from './components/news/News'
import { Profile } from './components/profile/Profile'
import { StatePropsType, store } from './components/redux/Store'
import { Settings } from './components/settings/Settings'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
