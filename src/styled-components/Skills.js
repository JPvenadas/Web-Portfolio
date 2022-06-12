import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #F5F5F5;
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    width: 1200px;
    padding: 0 20px;
    height: 680px;
    flex-direction: column;

`   
export const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    color: #7A8F72;
    @media (max-width: 900px) {
       font-size: 30px;
    }

`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 140px);
    grid-template-rows: repeat(2, 140px)
`
export const GridItem = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
`
export const Image = styled.img`
    width: 60px;
    height: 60px;
`
export const SkillTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #5C6759;
`