import styled from "styled-components";

export const ListContainer = styled.div`
    background-color: #f8f9fa;
    min-width: 255px;
    border-radius: 8px;
    padding: 16px 8px 16px 8px;
    height: fit-content;
`

export const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    row-gap: 8px;
    display: grid;
    grid-template-columns: 1fr;
`

export const ListName = styled.p`
    margin: 0px 0px 8px 8px;
    padding: 0;
    font-size: 14px;
    font-family: ${(props)=> props.theme.fontFamily};
    font-weight: 600;
`
export const ListItem = styled.li`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-width: 239px;
    min-height: 51px;
    padding: 16px;
    background-color: ${(props) => props.theme.colorWhite};
    border-radius: 8px;
    font-size:14px;
    font-family: ${(props)=> props.theme.fontFamily};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
`
