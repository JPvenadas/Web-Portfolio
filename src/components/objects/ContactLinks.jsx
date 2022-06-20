import React from 'react'
import { SocialContainer, SocialLink } from '../../styled-components/Contacts'
import github from '../../Images/Github-white.png'
import facebook from '../../Images/Facebook-white.png'
import linkedin from '../../Images/Linkedin-white.png'
import telegram from '../../Images/Telegram-white.png'

const ContactLinks = () => {
  return (
    <SocialContainer>
        <SocialLink background={github}></SocialLink>
        <SocialLink background={facebook}></SocialLink>
        <SocialLink background={linkedin}></SocialLink>
        <SocialLink background={telegram}></SocialLink>
    </SocialContainer>
  )
}

export default ContactLinks
