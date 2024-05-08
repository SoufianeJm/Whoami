import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://www.instagram.com/souf3ane/" 
            className="home__social-icon" 
            target="_blank" 
            rel='noreferrer'
        >
            <i className='bx bxl-instagram'></i>
        </a>
        <a 
            href="https://dribbble.com/SoufianeJoumal" 
            className="home__social-icon" 
            target="_blank" 
            rel='noreferrer'
        >
            <i className='bx bxl-dribbble' ></i>
        </a>
        <a 
            href="https://github.com/SoufianeJm" 
            className="home__social-icon" 
            target="_blank" 
            rel='noreferrer'
        >
            <i className='bx bxl-github' ></i>
        </a>
    </div>
  )
}

export default Social
