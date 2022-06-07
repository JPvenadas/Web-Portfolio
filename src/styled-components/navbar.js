import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 100%;
    display: flex;
    align-items: flex-end;
    @media (max-width: 600px) {
        align-items: center
    }
`
export const Logo = styled.h1`
    font-weight: 800;
    font-size: 16px;
    color: #64795D;
`
export const NavLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    transition: .4s ease;
    height: 100%;
    @media (max-width: 600px) {
        position: absolute;
        top: 60px;
        right: ${({right})=>right};
        width: 200px;
        background: ${({background})=>background};
        height: 100vh;
        justify-content: flex-end;
    }
`
export const Navlinks = styled.ul`
    display: flex;
    justify-content: center;
    transition: .8s ease;
    gap: 40px;
    align-items: flex-end;
    @media (max-width: 600px) {
        height: 100%;
        width: 200px;
        background:#EEF0EB;
        gap: 20px;
        position: absolute;
        right: ${({right})=>right};
        padding: 20px;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    }
`
export const Navlink = styled.li`
    font-size: 15px;
    @media (max-width: 600px) {
       color: white;
    }
`
export const HammenuContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
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
