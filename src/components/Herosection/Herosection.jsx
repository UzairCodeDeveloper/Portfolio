import React from 'react'
import './herosection.css'
import {BsFacebook,BsLinkedin} from 'react-icons/bs'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import {BiLogoFacebook,BiLogoInstagram,BiLogoLinkedin} from 'react-icons/bi'
import heroImg from './heroimg.png'
import { Typewriter } from 'react-simple-typewriter'
export default function Herosection() {
    return (
        <div className='container-fluid heroContainerfluid'>
            <div className='container heroContainer'>
                <div className='heroLeft'>
                    <h1 style={{color:'#ffc107'}}>Hi! I'm Uzair 👀</h1>

                    <div className='retyperDiv'>
                        <h4 className='headspace'>and I'm a  </h4>

                        <h4 style={{ color: 'white', }}>

                            <Typewriter
                                words={['Frontend Expert', 'React Expert', 'API integrator', 'Programmer', 'Web Hoster']}
                                loop={Infinity}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </h4>
                    </div>
                    <h6>I am an enthusiastic Full Stack Software Developer 🚀 with a particular focus on Frontend technologies. I have a proven track record of creating Web applications using JavaScript, React.js, Node.js, and various other cutting-edge libraries and frameworks.</h6>
                    <div className='socialmediaBTNs'>
                        
                        <a target='_blank'>
                        <BiLogoFacebook className='socialIcon' />
                        </a>
                        <a href='https://www.instagram.com/uzair2k02/' target='_blank'>
                        <BiLogoInstagram className='socialIcon' />
                        </a>
                        <a href='https://www.linkedin.com/in/muhammad-uzair-zafar-80a802241/' target='_blank'>
                        <BiLogoLinkedin className='socialIcon' />
                        </a>
                        
                    </div>
                </div>
                <div className='heroRight'>
                    <div className='imageBox'>
                    <div className='imgBox'>
                    <img src={heroImg} id='heroImg'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
