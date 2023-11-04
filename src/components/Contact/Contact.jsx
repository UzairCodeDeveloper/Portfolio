import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLocationArrow} from 'react-icons/fa'
export default function Contact() {
  return (
    <div className='container-fluid cContainer-fluid' id='contact'>
      <div className='container cContainer'>
        <div className='title'>
          <h1 style={{ color: '#ffc107' }}>Contact Me</h1>
        </div>
        <div className='contactContainer'>
          <div className='contactBox'>
            <div className='ICON'>
              <BsLinkedin className='wICON' style={{ color: '#ffc107' }}/>
              <h6>Muhammad Uzair Zafar</h6>
            </div>
          </div>
          <div className='contactBox'>
            <div className='ICON'>
              <AiOutlineMail className='wICON ' style={{ color: '#ffc107' }}/>
              <h6 id='emailhead'>uzair@Muhammaduzair.online</h6>
            </div>
          </div>
          <div className='contactBox'>
            <div className='ICON'>
              <FaLocationArrow className='wICON' style={{ color: '#ffc107' }}/>
              <h6>Pakistan</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
