import React from 'react'
import './project.css'
import projects from './Projectsdata'
import Projectstructure from './Projectstructure'
export default function Projects() {
    return (
        <div className='container-fluid pContainerfluid' id='projects' >
            <div className='container '>
                <div className='title'>
                    <h1 style={{ color: '#ffc107' }}>Projects</h1>
                </div>
                <div className='pContainer' >
                {projects.map((val)=>{
                    return(
                        <Projectstructure 
                            image={val.image}
                            title={val.title}
                            Desc={val.Desc}
                            link={val.link}
                        />
                    )
                })}
                </div>
            </div>
        </div>

    )
}
