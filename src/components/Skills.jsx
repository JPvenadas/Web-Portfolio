import React from 'react'
import { MainContainer,
         Container,
        SectionTitle,
        Grid
    } from '../styled-components/Skills'
import { TransparentTitle } from '../styled-components/styled-objects'

const Skills = () => {
  return (
    <MainContainer>
        <Container>
            <TransparentTitle>Skills</TransparentTitle>
            <SectionTitle>My Tech Stacks</SectionTitle>
            <Grid>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Grid>
        </Container>
    </MainContainer>
  )
}

export default Skills
