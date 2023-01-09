import React from 'react'
import Linkedin from '../images/linkedinIcon.svg'
import Github from '../images/githubIcon.svg'
import CodewarsIcon from '../images/codewarsIcon.svg'

const Banner = () => {
  return (
   <div className='portfolio__banner'>
      <div className='container'>
         <header>
            <div className='portfolio__brand'>Meryem</div>
            <ul className='portfolio__rs'>
               <li><a href="https://www.linkedin.com/in/meryem-a-582b22a5/"><img src={Linkedin} alt="" /></a></li>
               <li><a href="https://github.com/Meriemu"><img src={Github} alt="" /></a></li>
               <li><a href="https://www.codewars.com/users/Meriemu"><img src={CodewarsIcon} alt="" /></a></li>
            </ul>
         </header>

         <div className='portfolio__text'>
            <h1>Nice to meet you !  I'm <br /><span>Meryem Achemlal.</span></h1>
            <p className='portfolio__desc'>Lorem ipsum dolor sit amet consectetur.</p>
            <a className='portfolio__contactme--link' href="#contactme">Contact me</a>
         </div>
      </div>
   </div>


  )
}

export default Banner