import React from 'react'
import './_loginScreen.scss'
const LoginScreen = () => {
  return (
    <div className='login'>
        <div className='login_container'>
            <h2>Youtube</h2>
            <img 
                src = 'http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt = ''
            />
            <button>Login With google</button>
        </div>
      
    </div>
  )
}

export default LoginScreen
