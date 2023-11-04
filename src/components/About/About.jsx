import React from 'react'
import './about.css'
import aboutImg from './aboutimage.png'
export default function About() {
  return (
    <div className='container-fluid aboutFluid' id='About'>
      <div className='container aboutContainer'>
        <div className='aboutLeft'>
          <div className='imageBox'>
            <div>
              <img src={aboutImg} id='aboutImg'></img>
            </div>
          </div>
        </div>
        <div className='aboutRight'>
          <div className='content'>
          <h1 style={{color:'#ffc107'}}>About Me </h1>
            <h6>
              I am a highly motivated Computer Science student with a strong background in generic programming and a deep passion for web development technologies. My goal is to leverage my skills to tackle real-world challenges and make a meaningful impact in the tech industry. I am dedicated to ongoing learning and fostering innovation. My academic journey includes pursuing a Bachelor of Science in Computer Science at the University of Gujrat, Gujrat, which I started in 2021. Prior to this, I completed my HSSC (Pre-Eng) at Punjab Group of College, Gujrat, from 2019 to 2021, and my SSC (Science) at Dar-e-Arqam, Gujrat, from 2017 to 2019.
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
