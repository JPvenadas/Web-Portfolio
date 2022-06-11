import styled from "styled-components";

export const Button = styled.button`
    border-style: none;
    width: 190px;
    height: 45px;
    font-weight: 700;
    position: relative;
    padding-left: 10px;
    font-size: 16px;
    color: ${({letter})=> letter};
    opacity: ${({opacity})=> opacity};
    transform: ${({translate})=> translate};
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right,${({color1})=> color1} 0%, ${({color1})=> color1} 
                                52%, ${({color2})=> color2} 52%, ${({color2})=> color2} 100%);
    background-size: 200%;
    transition: .5s ease;
    box-shadow: 1px 1px 2px #D2D2D2;
    background-position: right top;
    :hover{
        background-position: left top;
        color: white;
    }
`

export const TransparentTitle = styled.h3`
    position: absolute;
    font-weight: 700;
    font-size: 250px;
    color: rgba(117, 247, 72, 0.1);
    top: -60px;
    left: -50px;
`