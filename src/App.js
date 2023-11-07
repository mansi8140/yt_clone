import React from 'react'
import Header from './componenets/header/Header'
import Sidebar from './componenets/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <>
    <Header />
    <div className='app-container'>
      <Sidebar />
      <Container fluid className='app_main'>
        <HomeScreen />
      </Container>
    </div>
    </>
  )
}

export default App
