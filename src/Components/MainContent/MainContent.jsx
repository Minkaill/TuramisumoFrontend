import React from 'react'
import MainWelcome from './MainWelcome/MainWelcome'
import '../../scss/main/mainContent.scss'
import MainRooms from './MainRooms/MainRooms'
import MainSlice from './MainSlice/MainSlice'
import Header from '../Header/Header'

const MainContent = () => {
  return (
    <main className='main'>
      <MainWelcome />
      <MainRooms />
      <MainSlice />
    </main>
  )
}

export default MainContent
