import React from 'react'
import { MainContainer,
         Container,
         Greetings,
         NameTitle,
         Hobby,
         Highlighted,
         Description,
         ButtonContainer
} from '../styled-components/Header'
import { useState } from 'react'
import { Button } from '../styled-components/Button'
const Header = () => {
    const [button1hover, SetButton1hover] = useState(false)
    const [button2hover, SetButton2hover] = useState(false)
  return (
    <MainContainer>
        <Container>
            <Greetings>Hi there I'm</Greetings>
            <NameTitle>Jayphe Venadas</NameTitle>
            <Hobby>I <Highlighted>Create</Highlighted> and <Highlighted>Develop</Highlighted> stuffs</Hobby>
            <Description>
            I am a Software Developer based in the Philippines, I have profound  Interest in Coding especially in Web  Development, and I am always looking forward to learn new things
            </Description>
            <ButtonContainer>
            <Button 
            onMouseEnter={()=>{SetButton1hover(true)}}
            onMouseLeave={()=>{SetButton1hover(false)}}
            >{button1hover? <ion-icon class="icon" color="white" name="hand-left"></ion-icon>: ''} Say hello</Button>
            <Button
            onMouseEnter={()=>{SetButton2hover(true)}}
            onMouseLeave={()=>{SetButton2hover(false)}}
            >{button2hover? <ion-icon class="icon" color="white" name="document-text"></ion-icon>: ''} Download CV</Button>
            </ButtonContainer>
        </Container>
    </MainContainer>
  )
}

export default Header
