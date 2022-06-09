import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    position: relative;
    width: 100%;
    z-index: 1
`
export const Container = styled.div`
    display: flex;
    width: 1200px;
    flex-direction: column;
    padding: 0 40px;
    height: 600px;
    justify-content: center;
    @media (max-width: 900px) {
        align-items: center
    }
    @media (max-width: 600px) {
        height: calc(100%-60px);
    }
`
export const Greetings = styled.p`
    font-weight: 400;
    font-size: 24px;
    opacity: 0;
    transform: translateY(20px);
    @media (max-width: 600px) {
      font-size: 14px;
    }
`
export const NameTitle = styled.h1`
    font-weight: 700;
    font-size: 96px;
    color: #638D55;
    opacity: 0;
    transform: translateY(20px);
    @media (max-width: 950px) {
       font-size: 50px;
    }
    @media (max-width: 600px) {
      font-size: 30px;
      text-align: center;
      color: #37562C;
    }
`
export const Hobby = styled.h3`
    font-weight: 700;
    font-size: 48px;
    color: #97AA90;
    opacity: 0;
    transform: translateY(20px);
    @media (max-width: 900px) {
       font-size: 30px;
    }
    @media (max-width: 600px) {
       font-size: 20px;
       text-align: center;
    }
`
export const Highlighted = styled.span`
    color: #788E71;
`
export const Description = styled.h4`
    font-weight: 600;
    margin-top: 20px;
    font-size: 16px;
    opacity: 0;
    transform: translateY(20px);
    color: #5C6759;
    max-width: 647px;
    line-height: 24px;
    @media (max-width: 900px) {
       text-align: center;
       font-size: 14px
    }
  
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
    margin: 35px 0;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 20px;
    }
`