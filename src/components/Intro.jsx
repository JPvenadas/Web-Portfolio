import React from 'react'
import { Container,
         Slider,
         Tagline,
         Highlight,
         FlexContainer,
         FlexItem,
         Line,
         Developer
 } from '../styled-components/Intro'    
const Intro = () => {
  return (
      <div>
          <Container>
              <Tagline>Join me as I <Highlight>Develop</Highlight>.</Tagline>
              <FlexContainer>
                <FlexItem width="70%">
                    <Line></Line>
                </FlexItem>
                <FlexItem width="30%">
                    <Developer>Jp Venadas</Developer>
                </FlexItem>
              </FlexContainer>
          </Container>
          <Slider></Slider>
      </div>
    
  )
}

export default Intro
