import { Grid } from "../../styled-components/Projects"
import ProjectItem from "./ProjectItem"

//icon
import web from './../../Images/Web.png'
import github from './../../Images/Source.png'
import download from './../../Images/Download.png'
import play from './../../Images/Play.png'

//project images
import portfolio from './../../Images/Project1.png'
import slides from './../../Images/Project2.png'
import easybank from './../../Images/Project3.png'
import mynotepad from './../../Images/Project4.png'

const ProjectGrid = () => {
  return (
    <Grid>
        <ProjectItem
         bg={portfolio}
         title="Web Portfolio"
         description="A simple and minimalist Web Portfolio to showcase my projects and my skills as a developer and a designer. I Created it with Figma, React and fancy Greensock Animations"
         buttons={[
          {img: github,
           link: "https://github.com/JPvenadas/Web-Portfolio.git",
           disabled: false
          },
          {img: web,
          disabled: true
          }
        ]}
         Stacks={["React", "Figma", "Styled-components", "GSAP"]}
        />
        <ProjectItem
         bg={slides}
         title="Slides"
         description="A web game that I made for fun. As I love solving puzzles and playing Wild Rift. I created a classic sliding puzzle game with League of Legends theme. It has three level of difficulty and 50 different images"
         buttons={[

          {img: github,
          link: "https://github.com/JPvenadas/Slides---LOL-puzzle-game.git",
          disabled: false
          },

          {img: play,
          link: "https://slidespuzzle.netlify.app/",
          disabled: false
        }
        ]}
         Stacks={["HTML", "CSS", "Vanilla Javascript"]}
        />
         <ProjectItem
         bg={[easybank]}
         title="EasyBank"
         description="A simple landing page interface. An intermidiate challenge from Frontend Mentor that I take to test wether I could develop/convert a design(Picture) to a website Interface."
         buttons={[
          {img: github,
            link: "https://github.com/JPvenadas/EasyBank-FrontendMentor.git",
            disabled: false
          },
          {img: web,
          link: "https://easy-bank-frontend-mentor.vercel.app/",
          disabled: false
          }
        ]}
         Stacks={["React", "Styled-components"]}
        />
         <ProjectItem
         bg={mynotepad}
         title="My Notepad"
         description="Have an app that can be your notepad everytime. this is an android CRUD application that I made with React native. It is made to keep and manage your daily notes."
         buttons={[
          {img: github,
           link: "https://github.com/JPvenadas/MyNotepad.git",
           disabled: false
          },
          {img: download,
          link: "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jpvenadas/my-notepad-3852508f56dc461b9db8a7488464a761-signed.apk",
          disabled: false
          }
        ]}
         Stacks={["React Native", "Async Storage", "Formik"]}
        />
    </Grid>
  )
}

export default ProjectGrid
