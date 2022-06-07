import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82px;
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
    align-items: flex-end
`
export const Logo = styled.h1`
    font-weight: 800;
    font-size: 16px;
    color: #64795D;
`
export const NavLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`
export const Navlinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: flex-end
`
export const Navlink = styled.li`
    font-size: 15px;
`
export const HammenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%
`
export const Hammenu = styled.button`
    height: 20px;
    width: 20px;
    position: relative;
    background: transparent;
    gap: 5px;
    border-style: none;
`
