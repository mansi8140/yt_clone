import React, { useState } from 'react'
import Header from './componenets/header/Header'
import Sidebar from './componenets/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap'
import './_app.scss'
const App = () => {

  const [sidebar, isopenSidebar] = useState(false);

  const openSidebar = () => isopenSidebar(value => !value)

  return (
    <>
    <Header openSidebar = {openSidebar} />
    <div className='app-container border obrder-info'>
      <Sidebar sidebar={sidebar} openSidebar = {openSidebar}/>
      <Container fluid className='app_main'>
        <HomeScreen />
      </Container>
    </div>
    </>
  )
}

export default App

