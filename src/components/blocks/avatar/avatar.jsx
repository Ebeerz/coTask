import styled from "styled-components";
export const Avatar = styled.button`
    background-color: inherit;
    border: none;
    width: 38px;
    height: 38px;
    display: flex;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    margin-left: ${(props)=> props.$marginLeft || `0px`};
    margin-right: ${(props)=> props.$marginRight || `0px`};
`