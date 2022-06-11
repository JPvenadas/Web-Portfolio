import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #FBFBFB;
`
export const Container = styled.div`
    width: 1200px;
    position: relative;
    padding: 0 40px;
    flex-direction: column;
    height: 680px;
    gap: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px) {
        height: auto;
        gap: 0px;
    }
`
export const Grid = styled.div`
     grid-template-columns: 1fr 10px 1fr;
     display: grid;
     gap: 50px;
     @media (max-width: 900px) {
         grid-template-columns: 1fr;
     }
`
export const GridItem = styled.div`
    display: flex;
    justify-content: ${({justify})=> justify};
    align-items: ${({align})=> align};;
    flex-direction: ${({direction})=> direction};
    gap: 25px;
    transform:${({translate})=> translate};
    @media (max-width: 900px) {
        display: ${({display})=> display};
        text-align: center;
     }
`
export const Image = styled.img`
    width: 397px;
    height: 366px;
    @media (max-width: 900px) {
       width:300px;
       height: 270px;
    }
`
export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    color: #7A8F72;
    @media (max-width: 900px) {
       font-size: 30px;
    }

`
export const Line = styled.div`
    width: 4px;
    text-align: center;
    height: 360px;
    background: #456E3E;
`
export const Title = styled.h3`
    font-weight: 400;
    font-size: 36px;
    color: #64795D;
    width: 100%;
    @media (max-width: 900px) {
       font-size: 20px;
    }
`
export const OccupationDescription = styled.p`
    font-weight: 600;
    font-size: 15px;
    color: #5C6759;
    max-width: 455px;
    line-height: 23px;
`
export const Subtitle = styled.h4`
    font-weight: 400;
    font-size: 20px;
    color: #64795D;
`
export const Interest = styled.p`
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #5C6759;
    max-width: 430px;
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    @media (max-width: 900px) {
      justify-content: center;
      align-items: center
    }

`