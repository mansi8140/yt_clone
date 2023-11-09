import React from 'react'
import './_video.scss'

import {AiFillEye} from 'react-icons/ai'

const Video = () => {
  return (
    <div className='video'>

       <div className='video_top'>
          <img src = 'https://i.ytimg.com/vi/yVTNge3sXpg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA33YREPVl6esKuvzh8-ZoAiRxhrA' alt=''/>
          <span>19:43</span>
      </div>

      <div className='video_title'>
          Tark Mehta Ka Oolta Chashma
      </div>

      <div className='video_details'>
          <span>
            <AiFillEye /> 15m Views •
          </span>
          <span>
            1 Day ago
          </span>
      </div>

      <div className='video_channel'>
          <img src = 'https://yt3.ggpht.com/Ou8cuqWa6u_cH5UdmwIp47au5TEKSXOyj13dHlXv92gjGe4xk2EkkBHN3641s1wDhE4thR09xg=s68-c-k-c0x00ffffff-no-rj' alt=''/>
          <p>TMKOC</p>
      </div>

    </div>
  )
}

export default Video
