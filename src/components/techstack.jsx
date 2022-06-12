import React from 'react'
import { GridItem, Image, SkillTitle } from '../styled-components/About'


const techstack = ({Img, tech}) => {
  return (
   <GridItem>
       <Image src={Img}></Image>
       <SkillTitle>{tech}</SkillTitle>
   </GridItem>
  )
}

export default techstack
