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
    Stack
} from "../../styled-components/Projects"
import { useState, useRef } from "react"
import gsap from "gsap";

const ProjectItem = ({bg, title, description, buttons, Stacks}) => {
    const [hoverState, setHoverState] = useState(false);
    let circularButton = useRef([])

    const buttonSpawn = (e) => {
        if (!hoverState){
            let tl = gsap.to(circularButton.current, {duration: 1.3, ease: 'bounce', y: 0, stagger: .2, overwrite: true})
            if(tl.isActive()){
                e.preventDefault(); // this will also stop <a> tag links
            }
        }else{
            gsap.to(circularButton.current, {duration: .5, ease: 'bounce', y: 200, stagger: .2, overwrite: true});
        }
    }
  return (
   <Project 
   onMouseEnter={(e)=>{setHoverState(true); buttonSpawn(e)}}
   onMouseLeave={(e)=>{setHoverState(false); buttonSpawn(e)}}>
          <Preview background={bg}>
              {buttons.map((button, i) => (
                  <CircularButton ref={el => circularButton.current[i] = el}>
                      <ButtonIcon src={button.img}></ButtonIcon>
                  </CircularButton>))}
                  <Shade opacity={hoverState ? 1 : 0}></Shade>
          </Preview>
         
          <DescriptionSection>
              <DescriptionContainer>
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
