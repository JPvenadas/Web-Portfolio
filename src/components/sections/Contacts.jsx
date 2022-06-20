import React from 'react'
import { 
    MainContainer,
    Green,
    Container,
    BottomContainer,
    Copyright,
    TransparentTitle,
    FlexSection,
    SectionTitle,
    SubTitle,
    Description,
    ContactContainer,
    HeadingTitle,
    Email
 } from '../../styled-components/Contacts'
const Contacts = () => {
  return (
      <MainContainer>
          <Green>
              <Container>
              <TransparentTitle className='untouchable'>Contacts</TransparentTitle>
                <FlexSection justify="space-around">
                    <SectionTitle>Get in touch</SectionTitle>
                    <SubTitle>That's enough for me, Let's talk about you.</SubTitle>
                    <Description>Feel free to cantact me anytime. wether it be for business purposes, questions or just a simple greetings, my inbox is always open</Description>
                </FlexSection>
                <FlexSection justify="flex-end">
                    <ContactContainer>
                        <HeadingTitle>Email</HeadingTitle>
                        <Email href='mailto:jaypheevenadas.gmail.com' target="_blank">jaypheevenadas.gmail.com</Email>
                        <HeadingTitle>Social</HeadingTitle>
                    </ContactContainer>
                </FlexSection>
              </Container>
              <BottomContainer>
                <Copyright>© Jayphe Venadas. All Rights Reserved, 2022</Copyright>
              </BottomContainer>
          </Green>
      </MainContainer>
  )
}

export default Contacts
