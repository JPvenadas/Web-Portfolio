import React from 'react'
import { GridItem, Image, SkillTitle } from '../../styled-components/Skills'


const Techstack = ({Img, tech}) => {
  return (
   <GridItem>
       <Image className='skills' src={Img}></Image>
       <SkillTitle className='skill-names'>{tech}</SkillTitle>
   </GridItem>
  )
}

export default Techstack
