import React from 'react'
import './Container2.css'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import image from '../../assets/Image.png'

const Container2 = () => {
  return (
    <div className='container2'>
        <h6>
            Join 4,000+ companies already growing
        </h6>
        <div className='comlogo'>
          <img src={logo1}/>
          <img src={logo2}/>
          <img src={logo3}/>
          <img src={logo4}/>
          <img src={logo5}/>
          <img src={logo6}/>
        </div>
        <div className='cta'>
          <div className="content">
          <h2>
            Give us a shot
          </h2>
          <h4>
            Join over 4,000+ startups already growing with Untitled.
          </h4>
          <div className="btn">
            <button className='btn1'>Learn more</button>
          <button className='btn2'>Get Started</button>
          </div>
          </div>
          <div className="img">
            <img src={image} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Container2