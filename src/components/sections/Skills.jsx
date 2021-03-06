import React from 'react'
import { MainContainer,
         Container,
        SectionTitle,
    } from '../../styled-components/Skills'
import { TransparentTitle } from '../../styled-components/styled-objects'
import SkillsGrid from '../objects/SkillsGrid'
const Skills = () => {
  return (
    <MainContainer id='skills'>
        <Container>
            <TransparentTitle className='untouchable TransparentSkill'>Skills</TransparentTitle>
            <SectionTitle className='skill'>My Tech Stacks</SectionTitle>
            <SkillsGrid/>
        </Container>
    </MainContainer>
  )
}

export default Skills
