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

const ProjectItem = ({bg, title, description, buttons, Stacks}) => {
  return (
   <Project>
        <Preview background={bg}>
            <Shade>
                {buttons.map( button =>(
                <CircularButton>
                    <ButtonIcon src={button.img}></ButtonIcon>
                </CircularButton>))}
            </Shade>
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
        </Preview>
   </Project>
  )
}

export default ProjectItem
