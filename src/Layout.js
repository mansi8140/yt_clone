import React, { useState } from 'react'
import Header from './componenets/header/Header'
import Sidebar from './componenets/sidebar/Sidebar'
import { Container } from 'react-bootstrap'

const Layout = ({component}) => {

  const [sidebar, isopenSidebar] = useState(false);

  const openSidebar = () => isopenSidebar(value => !value)

  return (
    <>
    <Header openSidebar = {openSidebar} />
    <div className='app_container'>
      <Sidebar sidebar={sidebar} openSidebar = {openSidebar}/>
      <Container fluid className='app_main'>
        {component}
      </Container>
    </div>
    </>
  )
}

export default Layout

