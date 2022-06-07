import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EEF0EB;
    width: 100%;
`
export const Container = styled.div`
    display: flex;
    width: 1200px;
    flex-direction: column;
    padding: 0 40px;
    height: 600px;
    justify-content: center
`
export const Greetings = styled.p`
    font-weight: 400;
    font-size: 24px;
`
export const NameTitle = styled.h1`
    font-weight: 700;
    font-size: 96px;
    color: #64795D
`
export const Hobby = styled.h3`
    font-weight: 700;
    font-size: 48px;
    color: #97AA90;
`
export const Highlighted = styled.span`
    color: #788E71;
`
export const Description = styled.h4`
    font-weight: 600;
    margin-top: 20px;
    font-size: 16px;
    color: #5C6759;
    max-width: 647px;
    line-height: 24px;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
    margin: 35px 0;
`

