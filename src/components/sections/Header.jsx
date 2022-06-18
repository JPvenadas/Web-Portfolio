import React from 'react'
import { MainContainer,
         Container,
         Greetings,
         NameTitle,
         Hobby,
         Highlighted,
         Description,
         ButtonContainer
} from '../../styled-components/Header'
import { useState } from 'react'
import { Button } from '../../styled-components/styled-objects'
const Header = () => {
    const [button1hover, SetButton1hover] = useState(false)
    const [button2hover, SetButton2hover] = useState(false)
  return (
    <MainContainer id="home">
        <Container>
            <Greetings className='greetings'>Hi there I'm</Greetings>
            <NameTitle className='name'>Jayphe Venadas</NameTitle>
            <Hobby className='hobby'>I <Highlighted>Create</Highlighted> and <Highlighted>Develop</Highlighted> stuffs</Hobby>
            <Description className='description'>
            I am a Software Developer based in the Philippines, I have profound  Interest in Coding especially in Web  Development, and I am always looking forward to learn new things
            </Description>
            <ButtonContainer>
            <Button color1="#456F3E" color2="#ffffff" letter="#456F3E" 
            opacity="0" translate='translateY(20px)' className='button'
            onMouseEnter={()=>{SetButton1hover(true)}}
            onMouseLeave={()=>{SetButton1hover(false)}}
            >{button1hover? <ion-icon class="icon" color="white" letter="#456F3E"  
            name="hand-left"></ion-icon>: ''} Say hello</Button>
            <Button color1="#456F3E" color2="#ffffff"
            letter="#456F3E" opacity="0" translate='translateY(20px)' className='button'
            onMouseEnter={()=>{SetButton2hover(true)}}
            onMouseLeave={()=>{SetButton2hover(false)}}
            >{button2hover? <ion-icon class="icon" color="white" name="document-text"></ion-icon>: ''} My Resume</Button>
            </ButtonContainer>
        </Container>
    </MainContainer>
  )
}

export default Header
