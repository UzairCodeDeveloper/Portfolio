import React from 'react'
import './navbar.css'
import resume from './resume.pdf'
export default function Navbar() {
  return (
    <header class="header">
    <nav class="navbar navbar-expand-lg Navbar fixed">
  <div class="container">
    <a class="navbar-brand" href="#" id='Title' title='Mern Stack Developer'>Uzair</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#whatido">What I do?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="btn btnResume" href={resume} download='Resume'>Resume</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </header>
  )
}
