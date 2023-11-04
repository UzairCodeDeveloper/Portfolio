import React from 'react'
import './whatido.css'
import { AiOutlineCodeSandbox,AiOutlineDatabase,AiOutlineApi,AiOutlineBug } from 'react-icons/ai'
import {CgPerformance} from 'react-icons/cg'
import {MdDeveloperMode} from 'react-icons/md'
export default function Whatido() {
    return (
        <div className='container-fluid whatFluid' id='whatido' data-aos="fade-right">
            <div className='title'>
                <h1 style={{ color: '#ffc107' }}>What I do ?</h1>
            </div>
            <div className='container whatContainer'>
                <div className='whatContent' style={{ background: '#252734' }} >
                    <div className='whatICON'>
                        <AiOutlineCodeSandbox className='wICON' style={{ color: '#ffc107' }} />
                    </div>
                    <div className='whatDescrip'>
                        <h3>Development</h3>
                        <h6 className='h6Heading'> Building and maintaining websites or web applications by writing code using programming languages like HTML, CSS, and JavaScript.</h6>
                    </div>
                </div>
                <div className='whatContent' style={{ background: '#252734' }}>
                    <div className='whatICON'>
                        <AiOutlineDatabase className='wICON' style={{ color: '#ffc107' }} />
                    </div>
                    <div className='whatDescrip'>
                        <h3>Database Management</h3>
                        <h6 className='h6Heading'>Designing and maintaining databases to store and retrieve data efficiently. This may involve using database management systems like MySQL, PostgreSQL, or MongoDB.</h6>
                    </div>
                </div>
                <div className='whatContent' style={{ background: '#252734' }}>
                    <div className='whatICON'>
                        <CgPerformance className='wICON' style={{ color: '#ffc107' }} />
                    </div>
                    <div className='whatDescrip'>
                        <h3>Performance Optimization</h3>
                        <h6 className='h6Heading'>Enhancing the website's speed and overall performance through techniques like code optimization and image compression.</h6>
                    </div>
                </div>
                <div className='whatContent' style={{ background: '#252734' }}>
                    <div className='whatICON'>
                        <AiOutlineApi className='wICON' style={{ color: '#ffc107' }} />
                    </div>
                    <div className='whatDescrip'>
                        <h3>API Integration</h3>
                        <h6 className='h6Heading'>Integrating external APIs (Application Programming Interfaces) into the website to enable features such as payment processing, social media sharing, or data retrieval.</h6>
                    </div>
                </div>
                <div className='whatContent' style={{ background: '#252734' }}>
                    <div className='whatICON'>
                        <MdDeveloperMode className='wICON' style={{ color: '#ffc107' }} />
                    </div>
                    <div className='whatDescrip'>
                        <h3>Responsive Design</h3>
                        <h6 className='h6Heading'>Creating websites that adapt to various screen sizes, including desktops, tablets, and mobile devices.</h6>
                    </div>
                </div>
                <div className='whatContent' style={{ background: '#252734' }}>
                    <div className='whatICON'>
                        <AiOutlineBug className='wICON' style={{ color: '#ffc107' }} />
                    </div>
                    <div className='whatDescrip'>
                        <h3>Bug Fixing</h3>
                        <h6 className='h6Heading'> Identifying and resolving issues or errors in the website's functionality, appearance, or performance to ensure a smooth user experience.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
