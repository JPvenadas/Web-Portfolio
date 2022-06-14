import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, {useRef, useEffect} from 'react'
import { MainContainer, 
        Container,
         Slider,
         Tagline,
         Highlight,
         FlexContainer,
         FlexItem,
         Line,
         Developer,
         TaglineContainer
 } from '../../styled-components/Animation'   
 gsap.registerPlugin(ScrollTrigger)

const Intro = () => {

    let text1 = useRef(null)
    let text1highlight = useRef(null)
    let line = useRef(null)
    let dev = useRef(null)
    let slider = useRef(null)
    let container = useRef(null)

    useEffect(() => {
      window.onunload = function () {
        window.scrollTo(0, 0);
      }
      //intro timeline
    const introTimeline = gsap.timeline()
    introTimeline.to(text1, {y: 0, duration: .8})
                 .to(line, {width: '100%', duration: 1}, '<.1')
                 .to(text1highlight, {y: 0, duration: .8}, '<.3')
                 .to(dev, {y: 0, duration: .8}, '<.3')
                 .to(slider, {y: '-200%', background: '#4a6a45', duration: .8}, '>.8')
                 .to(container, {y: '-200%', duration: .8}, )
                 .to('body', {overflowY: 'initial', duration: 0}, '<')
                 .to('.logo', {duration: .4, opacity: 1, y:0}, '<.3')
                 .to('.ham', {duration: .4, opacity: 1, y:0}, '<.15')
                 .to('.nav-link', {duration: .4, opacity: 1, y: 0, stagger: .08}, '<')
                 .to(['.greetings', '.name', '.hobby', '.description'], 
                    {duration: .4, opacity: 1, y: 0, stagger: .15})
                 .to('.button', {duration: .4, opacity: 1, y: 0}, '<.15')

      //about timeline
      gsap.to(['.about', '.line'], {y: 0, opacity: 1, duration: 1, scrollTrigger: '.about'})
      gsap.to('.about-transparent', {top: '-60px', duration: 2, scrollTrigger: '.about-transparent'} )
      gsap.to(['.about-left', '.about-right'], {x:0,duration: 1, opacity: 1, delay: .3, scrollTrigger: '.about-left'})

      //skills timeline
      gsap.to('.TransparentSkill', {top: '-60px', duration: 2, scrollTrigger: '.TransparentSkill'})
      gsap.to('.skill', {y: 0, opacity: 1, duration: 1, scrollTrigger: '.skill'})
      gsap.to('.skills', {y: 0, opacity: 1, duration: .4, stagger: .1, scrollTrigger: '.skills'})
      gsap.to('.skill-names', { opacity: 1, duration: .6, delay: 1.2, scrollTrigger: '.skill-names'})
    }, [])

    
  return (
      <MainContainer ref={el => container = el}>
          <Container>
              <TaglineContainer>
              <Tagline ref={el => text1 = el}>Join me as I </Tagline>
             <span> </span>
              <Highlight ref={el => text1highlight = el}> Code.</Highlight>
              </TaglineContainer>
              <FlexContainer>
                <FlexItem width="70%" justify="flex-start">
                    <Line ref={el => line = el}></Line>
                </FlexItem>
                <FlexItem width="30%" justify = "center">
                    <Developer ref={el => dev = el}>Jp Venadas</Developer>
                </FlexItem>
              </FlexContainer>
          </Container>
          <Slider ref={el => slider = el}></Slider>
        </MainContainer>
  )
}

export default Intro
