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
import capstone from './../../Images/capstone.jpg'
import mynotepad from './../../Images/Project4.png'
import dystoSpeed from './../../Images/Project6.png'
import wwtbm from './../../Images/Project5.png'

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
         bg={capstone}
         title="Sapang MIS"
         description = "A Barangay(Village) Management information System that we have created for Sapang, Binangonan, Rizal. This is our Capstone Project that I have developed alongside with my team in our university"
         buttons={[
          {img: github,
           link: "https://github.com/JPvenadas/Web-Portfolio.git",
           disabled: false
          },
          {img: web,
          link: "https://barangaysapangmanagementsystem.000webhostapp.com/index.php",
          disabled: false
          }
        ]}
        Stacks={["PHP", "MYSQL", "CSS", "SMS API"]}
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

      <ProjectItem
         bg={wwtbm}
         title="WWTM"
         description="A commissioned Web-based Project of the classic game 'Who wants to be a millionaire'. Test your knowledge, challenge yourself with lifelines, and see if you have what it takes to become a virtual millionaire in this engaging web-based game"
         buttons={[
          {img: github,
           link: "https://github.com/JPvenadas/WWTBM.git",
           disabled: false
          },
          {img: play,
          disabled: true
          }
        ]}
         Stacks={["Javascript", "CSS", "PHP" , "MYSQL"]}
        />

      <ProjectItem
         bg={dystoSpeed}
         title="DystoSpeed"
         description="DystoSpeed: Urban Pursuit is a relentless 2D racing game where you must outrun zombies, navigate obstacles, and survive the apocalypse in a high-speed pursuit for your life!"
         buttons={[
          {img: github,
           disabled: true
          },
          {img: download,
          link: "https://drive.google.com/file/d/1Ajl7M5qLStoRBQvE2K8bmglDJeAzn9Ot/view?usp=sharing",
          disabled: false
          }
        ]}
         Stacks={["Unity"]}
        />
    </Grid>
  )
}

export default ProjectGrid
