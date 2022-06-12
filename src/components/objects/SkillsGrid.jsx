import React from 'react'
import { Grid } from '../../styled-components/Skills'
import Techstack from './Techstack'

//pictures
import html from '../../Images/HTML.png'
import css from '../../Images/CSS.png'
import js from '../../Images/JS.png'
import figma from '../../Images/Figma.png'
import bootstrap from '../../Images/Bootstrap.png'
import mui from '../../Images/Material.png'
import git from '../../Images/Git.png'
import github from '../../Images/Github.png'
import react from '../../Images/React.png'
import Scomp from '../../Images/Styled Components.png'
import php from '../../Images/PHP.png'
import mysql from '../../Images/Mysql.png'

const SkillsGrid = () => {
  return (
    <Grid>
        <Techstack Img={html} tech="HTML"></Techstack>
        <Techstack Img={css} tech="CSS"></Techstack>
        <Techstack Img={js} tech="Javascript"></Techstack>
        <Techstack Img={figma} tech="Figma"></Techstack>
        <Techstack Img={bootstrap} tech="Bootstrap"></Techstack>
        <Techstack Img={mui} tech="Material UI"></Techstack>
        <Techstack Img={git} tech="Git"></Techstack>
        <Techstack Img={github} tech="Github"></Techstack>
        <Techstack Img={react} tech="React/ native"></Techstack>
        <Techstack Img={Scomp} tech="Styled comp."></Techstack>
        <Techstack Img={php} tech="PHP"></Techstack>
        <Techstack Img={mysql} tech="Mysql"></Techstack>
    </Grid>
  )
}

export default SkillsGrid
