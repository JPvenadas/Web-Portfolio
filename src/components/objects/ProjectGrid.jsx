import { Grid } from "../../styled-components/Projects"
import ProjectItem from "./ProjectItem"

//icon
import web from './../../Images/Web.png'
import github from './../../Images/Source.png'
import download from './../../Images/Download.png'

//project images
import portfolio from './../../Images/Project1.png'

const ProjectGrid = () => {
  return (
    <Grid>
        <ProjectItem
         bg={portfolio}
         title="Web Portfolioo"
         description="A simple and minimalist Web Portfolio to showcase my projects and my skills as a developer and a designer. I Created it with Figma, React and fancy Greensock Animations"
         buttons={[{img: github},{img: web}]}
        />
        <ProjectItem
         bg={portfolio}
         title="Web Portfolioo"
         description="A simple and minimalist Web Portfolio to showcase my projects and my skills as a developer and a designer. I Created it with Figma, React and fancy Greensock Animations"
         buttons={[{img: github},{img: web}]}
        />
         <ProjectItem
         bg={portfolio}
         title="Web Portfolioo"
         description="A simple and minimalist Web Portfolio to showcase my projects and my skills as a developer and a designer. I Created it with Figma, React and fancy Greensock Animations"
         buttons={[{img: github},{img: web}]}
        />
         <ProjectItem
         bg={portfolio}
         title="Web Portfolioo"
         description="A simple and minimalist Web Portfolio to showcase my projects and my skills as a developer and a designer. I Created it with Figma, React and fancy Greensock Animations"
         buttons={[{img: github},{img: web}]}
        />
    </Grid>
  )
}

export default ProjectGrid
