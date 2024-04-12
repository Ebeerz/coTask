import styled from "styled-components"

export const MainContainer = styled.div`
    padding: 54px 72px;
    display: flex;
    flex-direction: column;
`
export const ColumnList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 
        minmax(185px, auto) minmax(160px, auto) minmax(130px, auto) minmax(160px, auto) minmax(103px, auto);
`
export const ColumnName = styled.span`
    font-size: 12px;
    color: #6C757D;
    display: block;
`

export const TaskList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
`
export const Task = styled.li`
    display: grid;
    column-gap: 30px;
    grid-template-columns: 
        minmax(185px, auto) minmax(160px, auto) minmax(130px, auto) minmax(160px, auto) minmax(103px, auto);
    grid-template-rows: 19px;
    border-bottom: 1px solid #ABB5BE;
    padding: 16px 8px;
`

export const TaskProperty = styled.span`
    color: ${(props) => props.theme.fontColorBlack};
    font-size: 14px;
    display: flex;
    width: 100%;
    align-items: center;
`

export const TeamColor = styled.div`
    margin: auto 0;
    margin-right: 50px;
    min-width: 60px;
    height: 6px;
    background-color: #FF00F5;
    border-radius: 10px;
`