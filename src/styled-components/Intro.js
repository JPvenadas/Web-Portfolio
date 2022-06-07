import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fefefe;
    z-index: 10
`
export const Slider = styled.div`
    position: absolute;
    top: -200%;
    left: 0;
    background: #7B8973;
    z-index: 11;
    width: 100vw;
    height: 100vh;
`
export const Tagline = styled.h3`
    font-weight: 700;
    font-size: 53.2921px;
    color: #8DB77F;
`
export const Highlight = styled.span`
    color: #949494;
`
export const FlexContainer = styled.div`
    width: 580px;
    display: flex;
    justify-content: center;
    align-items: center
`
export const FlexItem = styled.div`
    width: ${({width})=> width};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Line = styled.div`
    height: 10px;
    width: 100%;
    background: #949494;
    border-radius: 55px;
`
export const Developer = styled.h4`
    font-weight: 600;
    font-size: 20px;
    color: #84AA77;
`
