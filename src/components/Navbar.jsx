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
              <Logo>Jp Venadas.</Logo>
            </LogoContainer>
            <NavLinksContainer background={navopen? "#97AA90": "#EEF0EB"} right={navopen? "0": "-400px" }>
              <Navlinks right={navopen? "0": "-200px" }>
                <Navlink>
                  <a href="">About</a>
                </Navlink>
                <Navlink>
                 <a href="">Skills</a>
                </Navlink>
                <Navlink>
                 <a href="">Projects</a>
                </Navlink>
                <Navlink>
                  <a href="">Contact</a>
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
