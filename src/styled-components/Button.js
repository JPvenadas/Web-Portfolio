import styled from "styled-components";

export const Button = styled.button`
    border-style: none;
    width: 190px;
    height: 45px;
    font-weight: 700;
    position: relative;
    font-size: 16px;
    color: #456F3E;
    opacity: 0;
    transform: translateY(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right,#456F3E 0%, #456F3E 52%, white 52%, white 100%);
    background-size: 200%;
    transition: .5s ease;
    box-shadow: 1px 1px 2px #D2D2D2;
    background-position: right top;
    :hover{
        background-position: left top;
        color: white;
    }
`