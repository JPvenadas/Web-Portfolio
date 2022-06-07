import styled from "styled-components";

export const Button = styled.button`
    border-style: none;
    border: 1px solid #64795D;
    width: 190px;
    height: 45px;
    font-weight: 700;
    position: relative;
    font-size: 16px;
    color: #7A8F72;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right,#456F3E 0%, #456F3E 56%, transparent 56%, transparent 100%);
    background-size: 200%;
    transition: .5s ease;
    background-position: right top;
    :hover{
        background-position: left top;
        color: white;
    }
`