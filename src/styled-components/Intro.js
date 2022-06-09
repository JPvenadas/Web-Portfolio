import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: #fefefe;
    z-index: 10;
    overflow: clip;
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`
export const Slider = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background: #949494;
    z-index: 11;
    width: 100vw;
    height: 100vh;
`
export const TaglineContainer = styled.div`
    overflow: hidden;
`
export const Tagline = styled.span`
    font-weight: 700;
    display: inline-block;
    font-size: 53.2921px;
    color: #949494;
    transform: translateY(100px);
    @media (max-width: 600px) {
    font-size: 25px;
    }
`
export const Highlight = styled.span`
    color: #8DB77F;
    display: inline-block;
    font-weight: 700;
    font-size: 53.2921px;
    transform: translateY(100px);
    @media (max-width: 600px) {
    font-size: 25px;
    }
`
export const FlexContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
    width: 250px;
    }
`
export const FlexItem = styled.div`
    width: ${({width})=> width};
    display: flex;
    justify-content: ${({justify})=> justify};
    align-items: center;
    overflow: hidden
`
export const Line = styled.div`
    height: 5px;
    width: 0%;
    background: #949494;
    border-radius: 55px;
    @media (max-width: 600px) {
    height: 3px;
    }
`
export const Developer = styled.h4`
    font-weight: 600;
    transform: translateY(100px);
    font-size: 20px;
    color: #84AA77;
    @media (max-width: 600px) {
    font-size: 10px;
    }
`
