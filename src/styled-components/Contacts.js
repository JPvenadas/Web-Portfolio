import styled from "styled-components";

export const MainContainer = styled.div`
   width: 100vw;
   padding-top: 25px;
   background: #d9d9d9;
`
export const Green = styled.div`
   height: 560px;
   width: 100%;
   background: #456E3E;
   display: grid;
   flex-direction: column;
    justify-content: center;
    grid-template-rows: 1fr 46px;
    grid-template-columns: 100%;
    @media (max-width: 600px) {
      height: auto;
      padding: 75px 0 0 0;
    }
`
export const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    padding: 0 40px;
    justify-self: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
        width: 900px;
       
    }
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        padding: 0;
        justify-content: center;
        text-align: center;
    }
`
export const BottomContainer = styled.div`
    border-top: solid 4px #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        border-top: solid 2px #d9d9d9;
    }
`
export const Copyright = styled.div`
    font-weight: 500;
    font-size: 13px;
    color: white;
    @media (max-width: 600px) {
        font-size: 11px;
    }
`
export const TransparentTitle = styled.p`
    font-weight: 700;
    font-size: 200px;
    position: absolute;
    top: -40px;
    left: 0;
    color: rgba(117, 247, 72, 0.1);
    @media (max-width: 600px) {
       display: none;
    }
`
export const FlexSection = styled.div`
    width: 450px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: ${({justify})=>justify};
    align-items: ${({align})=> align};
    position: relative;
    top: -30px;
    @media (max-width: 900px) {
        width: 350px;
        height: auto;
    }
    @media (max-width: 600px) {
        justify-content: center;
        align-items: center;
    }
`
export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    color: #EAEAEA;
    @media (max-width: 900px) {
        white-space: nowrap;
    }
    @media (max-width: 600px) {
       font-size: 30px;
       padding-bottom: 20px;
    }
`
export const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 24px;
    width: 270px;
    color: #FFFFFF;
    @media (max-width: 600px) {
      width: 100%;
      font-size: 12px;
      font-weight: bold;
    }
`
export const Description = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    width: 367px;
    @media (max-width: 900px) {
        font-size: 12px;
        width: 100%;
        max-width: 250px;
    }
`
export const ContactContainer = styled.div`
    border-left: 2px solid white;
    width: 320px;
    height: 160px;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    gap: 15px;
    @media (max-width: 600px) {
       border: none;
       padding: 0;
       justify-content: center;
       align-items: center;
       padding: 20px 0;
       height: auto;
       gap: 6px;
    }
`
export const Email = styled.a`
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    @media (max-width: 600px) {
       font-size: 12px;
    }
`
export const HeadingTitle = styled.h4`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    @media (max-width: 600px) {
      font-size: 15px;
    }
`
export const SocialContainer = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 600px) {
       justify-content: center;
    }
`
export const SocialLink = styled.a`
    width: 40px;
    height: 40px;
    background: url(${({background})=>background});
    background-size: 100% 100%;
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }
`