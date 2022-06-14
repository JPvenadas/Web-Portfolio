import { 
    Project, 
    Preview,
    Shade,
    CircularButton,
    ButtonIcon,
    DescriptionSection,
    DescriptionContainer,
    DescriptionTitle,
    DescriptionText
} from "../../styled-components/Projects"

const ProjectItem = ({bg, title, description, buttons}) => {
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
        </Preview>
   </Project>
  )
}

export default ProjectItem
