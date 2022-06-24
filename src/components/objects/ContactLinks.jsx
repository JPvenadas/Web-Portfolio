import React from 'react'
import { SocialContainer, SocialLink } from '../../styled-components/Contacts'
import github from '../../Images/Github-white.png'
import facebook from '../../Images/Facebook-white.png'
import linkedin from '../../Images/Linkedin-white.png'
import telegram from '../../Images/Telegram-white.png'

const ContactLinks = () => {
  return (
    <SocialContainer>
        <SocialLink target="_blank" rel="noreferrer" href='https://github.com/JPvenadas' background={github}></SocialLink>
        <SocialLink target="_blank" rel="noreferrer" href='https://www.facebook.com/jp.venadas.334' background={facebook}></SocialLink>
        <SocialLink target="_blank" rel="noreferrer" href='https://linkedin.com/in/Jp-Venadas' background={linkedin}></SocialLink>
        <SocialLink target="_blank" rel="noreferrer" href='https://t.me/JpVenadas' background={telegram}></SocialLink>
    </SocialContainer>
  )
}

export default ContactLinks
