import React from 'react'
import { 
    MainContainer,
    Container,
    SectionTitle,
    Grid

} from '../../styled-components/Projects'
import { TransparentTitle } from '../../styled-components/styled-objects'
import ProjectGrid from '../objects/ProjectGrid'

const Projects = () => {
  return (
    <MainContainer>
        <Container>
            <TransparentTitle>Works</TransparentTitle>
            <SectionTitle>Projects</SectionTitle>
            <ProjectGrid/>
        </Container>
    </MainContainer>
  )
}

export default Projects
