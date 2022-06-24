import { 
    Project, 
    Preview,
    Shade,
    CircularButton,
    ButtonIcon,
    DescriptionSection,
    DescriptionContainer,
    DescriptionTitle,
    DescriptionText,
    StackSection,
    Stack,
    TransparentProjectTitle
} from "../../styled-components/Projects"
import { useState, useRef } from "react"
import gsap from "gsap";

const ProjectItem = ({bg, title, description, buttons, Stacks}) => {
    const [projectHoverState, setProjectHoverState] = useState(false);
    let circularButton = useRef([])

    const buttonSpawn = (e) => {
        if (!projectHoverState){
            let tl = gsap.to(circularButton.current, {duration: .7,  delay: .5, ease: 'expo', y: 0, stagger: .2, overwrite: true})
            if(tl.isActive()){
                e.preventDefault(); // this will also stop <a> tag links
            }
        }else{
            gsap.to(circularButton.current, {duration: .5, y: 200, stagger: .2, overwrite: true});
        }
    }
  return (
   <Project className="project"
   onMouseEnter={(e)=>{setProjectHoverState(true); buttonSpawn(e)}}
   onMouseLeave={(e)=>{setProjectHoverState(false); buttonSpawn(e)}}>
          <Preview background={bg}>
              {buttons.map((button, i) => (
                 <a target="_blank" rel="noreferrer"  href={button.link}>
                  <CircularButton className={button.disabled? "disabled": ""}  ref={el => circularButton.current[i] = el}>
                      <ButtonIcon src={button.img}></ButtonIcon>
                  </CircularButton>
                 </a>))}
                  <Shade opacity={projectHoverState ? 1 : 0}></Shade>
          </Preview>
         
          <DescriptionSection>
              <DescriptionContainer>
                  <TransparentProjectTitle className="untouchable">{title}</TransparentProjectTitle>
                  <DescriptionTitle>{title}</DescriptionTitle>
                  <DescriptionText>{description}</DescriptionText>
              </DescriptionContainer>
          </DescriptionSection>
          <StackSection>
              {Stacks.map(stack => (
                  <Stack>{stack}</Stack>
              ))}
          </StackSection>
   </Project>
  )
}

export default ProjectItem
