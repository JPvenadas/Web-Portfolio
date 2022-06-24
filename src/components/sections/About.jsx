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
                          I am Jp Venadas a Frontend web developer based in the Philippines. I code beautiful and accessible custom frontend websites in React or even in Vanilla css/js. I am currently pursuing Information Technology in University of Rizal System.  I am looking for more opportunities as a developer and I would be glad to hear something from you.
                      </OccupationDescription>
                      <div style={{width: "100%"}}>
                          <Subtitle>
                              Recent Interests
                          </Subtitle>
                          <Interest>
                              Blockchain Development, Web design, Financial Literacy, Freelancing, Contributing to open source projects
                          </Interest>
                      </div>
                      <ButtonContainer>
                          <a href="#contacts">
                              <Button color1="#47883c" color2="#456E3E" letter="white"
                                  onMouseEnter={() => { SetButton1hover(true) }}
                                  onMouseLeave={() => { SetButton1hover(false) }}>
                                  {button1hover ? <ion-icon class="icon" color="white" name="laptop-outline"></ion-icon> : ''}  Work with me?</Button>
                          </a>
                          <Button color1="#47883c" color2="#456E3E" letter="white"
                              onMouseEnter={() => { SetButton2hover(true) }}
                              onMouseLeave={() => { SetButton2hover(false) }}>
                              {button2hover ? <ion-icon class="icon" color="white" name="arrow-down-circle-outline"></ion-icon> : ''}  Know me more?</Button>
                      </ButtonContainer>
                  </GridItem>
              </Grid>
          </Container>
    </MainContainer>
  )
}

export default About
