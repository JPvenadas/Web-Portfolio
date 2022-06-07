import { Container,
        MainContainer,
        LogoContainer,
        Logo,
        NavLinksContainer,
        Navlinks,
        Navlink,
        HammenuContainer,
        Hammenu,
 } from "../styled-components/navbar"
 import { useState } from "react"

const Navbar = () => {
  const [navopen, setNavopen] = useState(false)
  return (
    <MainContainer>
      <Container>
            <LogoContainer>
              <Logo>{"<Jp Venadas/>"}</Logo>
            </LogoContainer>
            <NavLinksContainer background={navopen? "#97AA90": "#EEF0EB"} right={navopen? "0": "-400px" }>
              <Navlinks right={navopen? "0": "-200px" }>
                <Navlink padding="20px 0 0 0">
                  <a href="#something">About</a>
                </Navlink>
                <Navlink>
                 <a href="#something">Skills</a>
                </Navlink>
                <Navlink>
                 <a href="#something">Projects</a>
                </Navlink>
                <Navlink padding="0 0 20px 0">
                  <a href="#something">Contact</a>
                </Navlink>
              </Navlinks>
            </NavLinksContainer>
            <HammenuContainer onClick={()=>{setNavopen(!navopen)}}>
              <Hammenu>
                <div className={`ham-top ${navopen? 'clicked': ''}`}></div>
                <div className={`ham-mid ${navopen? 'clicked': ''}`}></div>
                <div className={`ham-bot ${navopen? 'clicked': ''}`}></div>
              </Hammenu>
            </HammenuContainer>
      </Container>
    </MainContainer>
  )
}

export default Navbar
