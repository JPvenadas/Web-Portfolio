import React, { useState } from 'react'
import { MainContainer,
         Container,
         GridItem,
         Image,
         Grid,
         Line,
         SectionTitle,
         Title,
         OccupationDescription,
         Subtitle,
         Interest,
         ButtonContainer,
} from '../../styled-components/About'
import jp from './../../Images/Jp.png'
import { Button } from '../../styled-components/styled-objects'
import { TransparentTitle } from '../../styled-components/styled-objects'

const About = () => {
    const [button1hover, SetButton1hover] = useState(false)
    const [button2hover, SetButton2hover] = useState(false)
  return (
    <MainContainer id='about'>
          <Container>
          <TransparentTitle className='about-transparent untouchable'>About</TransparentTitle>
              <SectionTitle className='about'>About.</SectionTitle>
              <Grid>
                  <GridItem className='about-left' translate='translate(-60px)' direction="column" align='center' justify="flex-end">
                      <Image alt='Jp Venadas Photo' className='untouchable' src={jp}>
                      </Image>
                  </GridItem>
                  <GridItem className='line' display="none" translate='translateY(60px)' direction="column" align='center' justify="center">
                      <Line ></Line>
                  </GridItem>
                  <GridItem className='about-right' translate='translate(60px,-15px)' direction="column" align='flex-start' justify="center">
                      <Title>What do I do</Title>
                      <OccupationDescription>
                      Hello, I'm Jp Venadas, a Fullstack Web Developer based in the Philippines. I specialize in crafting visually appealing and accessible websites, utilizing my skills in both frontend and backend technologies. I have hands-on experience in building robust applications using JS, PHP, MYSQL. I also use React.js to create dynamic and responsive frontend interfaces. Currently pursuing an IT degree at the University of Rizal System, I'm eager for new opportunities to contribute to innovative projects. Let's connect and discuss how I can bring my skills to your team!
                      </OccupationDescription>
                      <div style={{width: "100%"}}>
                          <Subtitle>
                              Recent Interests
                          </Subtitle>
                          <Interest>
                            User Experience, Freelancing, Backend Development, Contributing to open source projects
                          </Interest>
                      </div>
                      <ButtonContainer>
                          <a href="#contacts">
                              <Button color1="#47883c" color2="#456E3E" letter="white"
                                  onMouseEnter={() => { SetButton1hover(true) }}
                                  onMouseLeave={() => { SetButton1hover(false) }}>
                                  {button1hover ? <ion-icon class="icon" color="white" name="laptop-outline"></ion-icon> : ''}  Work with me?</Button>
                          </a>
                      </ButtonContainer>
                  </GridItem>
              </Grid>
          </Container>
    </MainContainer>
  )
}

export default About
