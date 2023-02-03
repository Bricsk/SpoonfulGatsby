import React from 'react'
import "../styles/global.scss"
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer () {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <StaticImage className='img' src={"../assets/images/SpoonfulLogoWhite.png"} alt="Spoonful" />
        </div>
      </div>
    </div>
  )
}