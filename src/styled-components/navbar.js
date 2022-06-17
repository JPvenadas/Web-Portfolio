import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background:rgba(245,245,245,0.8);
    backdrop-filter: blur(10px);
    height: 82px;
    @media (max-width: 600px) {
        height: 60px;
    }
`
export const Container = styled.nav`
    display: flex;
    width: 1200px;
    padding: 0 40px;
    height: 100%;
    justify-content: space-between;
    align-items: center
`
export const LogoContainer = styled.div`
    display: flex;
    @media (max-width: 600px) {
        align-items: center
    }
`
export const Logo = styled.h2`
    font-weight: 800;
    font-size: 16px;
    color: #64795D;
    transform: translateY(-20px);
    opacity: 0;
`
export const NavLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    transition: .4s ease;
    @media (max-width: 600px) {
        position: fixed;
        top: 60px;
        right: ${({right})=>right};
        width: 200px;
        background: ${({background})=>background};
        height: 100vh;
        justify-content: flex-end;
        z-index: 2;
    }
`
export const Navlinks = styled.ul`
    display: flex;
    justify-content: center;
    transition: .8s ease;
    gap: 40px;
    @media (max-width: 600px) {
        height: 100%;
        width: 200px;
        background:#ffffff;
        gap: 20px;
        position: absolute;
        right: ${({right})=>right};
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    }
`
export const Navlink = styled.li`
    font-size: 15px;
    width: 100%;
    transition: .4s ease;
    font-weight: 600;
    transform: translateY(-20px);
    opacity: 0;
    text-align: center;
    @media (max-width: 600px) {
       color: white;
       margin: ${({padding})=> padding};
       :hover{
        border-left: 3px solid #97AA90;
        }   
    }
`
export const HammenuContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: flex-end;
    opacity: 0;
    transform: translateY(-20px);
    @media(max-width: 600px) {
        display: flex;
        align-items: center
    }
`
export const Hammenu = styled.button`
    height: 20px;
    width: 20px;
    position: relative;
    background: transparent;
    gap: 5px;
    border-style: none;
`

