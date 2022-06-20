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
`
export const Container = styled.div`
    width: 1200px;
    padding: 0 40px;
    justify-self: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BottomContainer = styled.div`
    border-top: solid 4px #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Copyright = styled.div`
    font-weight: 500;
    font-size: 13px;
    color: white;
`
export const TransparentTitle = styled.p`
    font-weight: 700;
    font-size: 200px;
    position: absolute;
    top: -40px;
    left: 0;
    color: rgba(117, 247, 72, 0.1);
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
`
export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    color: #EAEAEA;
`
export const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 24px;
    width: 270px;
    color: #FFFFFF;
`
export const Description = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    width: 367px;
`
export const ContactContainer = styled.div`
    border-left: 2px solid white;
    width: 320px;
    height: 160px;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
`
export const Email = styled.a`
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
`
export const HeadingTitle = styled.h4`
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
`