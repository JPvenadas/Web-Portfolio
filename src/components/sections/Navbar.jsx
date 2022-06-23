import { Container,
        MainContainer,
        LogoContainer,
        Logo,
        NavLinksContainer,
        Navlinks,
        Navlink,
        HammenuContainer,
        Hammenu,
 } from "../../styled-components/navbar"
 import { useState} from "react"
 import gsap from "gsap"

const Navbar = () => {
  const [navopen, setNavopen] = useState(false)


  window.onscroll = function(e) {
    // scrolling up
    if(this.oldScroll > this.scrollY){
      gsap.to('.navbar', {top: 0, duration: .2, overwrite: true})
    // scrolling down
    } else if(this.oldScroll < this.scrollY) {
      gsap.to('.navbar', {top: -100, duration: .2, overwrite: true})
    }
    this.oldScroll = this.scrollY;
    delete window.onscroll
 };

 const changeState = () =>{
  if(window.innerWidth <= 600){
    setNavopen(!navopen)
    !navopen? gsap.to('body', {overflow: 'hidden'}): gsap.to('body', {overflow: 'initial'})
  }
  }

  return (
    <MainContainer className="navbar">
      <Container>
            <LogoContainer>
              <Logo className="logo">Jp Venadas.</Logo>
            </LogoContainer>
            <NavLinksContainer background={navopen? "#97AA90": "#EEF0EB"} right={navopen? "0": "-400px" }>
              <Navlinks right={navopen? "0": "-200px" }>
                <Navlink onClick={()=>{changeState()}} className="nav-link" padding="20px 0 0 0">
                  <a href="#about">About</a>
                </Navlink>
                <Navlink onClick={()=>{changeState()}} className="nav-link">
                 <a href="#skills">Skills</a>
                </Navlink>
                <Navlink onClick={()=>{changeState()}} className="nav-link">
                 <a href="#projects">Projects</a>
                </Navlink>
                <Navlink className="nav-link" padding="0 0 20px 0">
                  <a onClick={()=>{changeState()}} href="#contacts">Contacts</a>
                </Navlink>
              </Navlinks>
            </NavLinksContainer>
            <HammenuContainer className="ham" onClick={()=>{
              changeState()
              }}>
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
