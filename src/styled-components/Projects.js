import styled from "styled-components";
 
export const MainContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`
export const Container = styled.div`
    width: 1200px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0;
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
    width: 900px;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 60px));
    gap: 60px 90px;
    padding: 0 30px;
`
export const Project = styled.div`
    display: flex; 
    height: 440px;
    width: 380px;
    flex-direction: column;
`
export const Preview = styled.div`
    width: 100%;
    height: 220px;
    background: url(${({background})=>background});
    background-size: 100% 100%;
`
export const Shade = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const CircularButton = styled.div`
    border-radius: 100%;
    width: 70px;
    height: 70px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonIcon = styled.img`
    width: 30px;
    height: 30px;
`
export const DescriptionSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const DescriptionContainer = styled.div`
    width: 325px;
    padding: 30px 0 15px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`
export const DescriptionTitle = styled.h4`
    font-weight: 600;
    font-size: 24px;
    color: #37582C;
`
export const DescriptionText = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #646464;
`
export const StackSection = styled.div`
    height: 60px;
    width: 100%;
    align-items: center;
    display: flex;
    gap: 10px;
    padding: 0 20px;
    background: rgba(127, 150, 123, .28);
`
export const Stack = styled.div`
    font-weight: 600;
    font-size: 8px;
    color: white;
    background: #456E3E;
    padding: 3px 12px;
`