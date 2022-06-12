import React from 'react'
import { GridItem, Image, SkillTitle } from '../../styled-components/Skills'


const Techstack = ({Img, tech}) => {
  return (
   <GridItem>
       <Image src={Img}></Image>
       <SkillTitle>{tech}</SkillTitle>
   </GridItem>
  )
}

export default Techstack
