import React from 'react'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import './_app.scss'

const App = () => {

  return (
    <Router>
     
      <Routes> {/* best match instead of being traversed in order. */}
        <Route path='/' exact element = {
           <Layout component={<HomeScreen />} /> 
          } 
        />
        
        <Route  path='/login' element = {
            <LoginScreen />
          } 
        />
          

        <Route path='/search'element = {
           <Layout component={<h1>This is search screen</h1>} />
          } 
        />
      </Routes>
    
    </Router>
  )
}

export default App

