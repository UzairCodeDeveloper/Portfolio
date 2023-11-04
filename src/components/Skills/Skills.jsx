import React from 'react'
import './skill.css'
import skills from './Skilldata'
import Skillstructure from './Skillstructure'
export default function Skills() {
  return (
    <div className='container-fluid skContainer-fluid' id='skills'  >
        <div className='container skContainer' >
        <div className='title'>
        <h1 style={{ color: '#ffc107' }}>Skills 🐱‍💻</h1>
        </div>
        <div className='sContainer'>
         {skills.map((val)=>{
          return (
          <Skillstructure
            image={val.image}
          />
         )})}
         </div>
        </div>
    </div>
  )
}
