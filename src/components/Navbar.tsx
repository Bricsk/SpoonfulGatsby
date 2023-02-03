import { Link } from 'gatsby'
import React from 'react'
import "../styles/global.scss"
import { StaticImage } from 'gatsby-plugin-image'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Navbar-Content'>
        <Link to="/"><div className='Navbar-Content-Logo'><StaticImage class='img' src={"../assets/images/SpoonfulLogoWhite.png"} alt="Spoonful" /></div></Link>
          <ul className='Navbar-Content-Pages'>
            <li><Link to="/about"><div className='Navbar-Content-Pages-Item'>ABOUT</div></Link></li>
            <li><Link to="/Media"><div className='Navbar-Content-Pages-Item'>MEDIA</div></Link></li>
            <li><Link to="/Contact"><div className='Navbar-Content-Pages-Item'>CONTACT</div></Link></li>
          </ul>
      </div>
    </div>
  )
}
