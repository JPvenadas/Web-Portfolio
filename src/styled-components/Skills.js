import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #F5F5F5;
    position: relative;
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    width: 1200px;
    padding: 0 20px;
    height: 680px;
    gap: 30px;
    flex-direction: column;
    @media (max-width: 900px) {
       padding: 60px 0;
       height: auto
    }

`   
export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    position: relative;
    top: -60px;
    opacity: 0;
    transform: translateY(20px);
    color: #7A8F72;
    @media (max-width: 900px) {
       font-size: 30px;
       top: 0;
    }

`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 140px);
    grid-template-rows: 140px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(4, 140px);
    }
    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 120px);
        grid-template-rows: 90px;
        gap: 10px;
    }

`
export const GridItem = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-direction: column;
`
export const Image = styled.img`
    width: 60px;
    display: block;
    height: 60px;
    transform: translateY(20px);
    opacity: 0;
    transition: .2s ease;
    @media (max-width: 600px) {
       width: 50px;
       height: 50px;
    }
`
export const SkillTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #5C6759;
    opacity: 0;
    @media (max-width: 600px) {
       font-size: 10px;
    }
`