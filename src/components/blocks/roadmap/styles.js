import styled from "styled-components";

const colorsForRisk = ["#fff", "#FFE7A1", "#FFB9B9"];
export const Task = styled.div`
    width: 158px;
    height: 96px;
    border-radius: 8px;
    background-color: ${(props) => colorsForRisk[props.$risk]};
    padding: 16px;
    padding-left: 28px;
    position: relative;
    &:before {
        content: '';
        display: block;
        width: 4px;
        height: 64px;
        position: absolute;
        background-color: #28A745;
        left: 15px;
        top: 30px;
        border-radius: 8px;
    }
    cursor: pointer;
`

export const TaskName = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.fontColorBlack};
    font-family: ${(props) => props.theme.fontFamily};
`

export const PersonName = styled.span`
    font-size: 10px;
    color: ${(props) => props.theme.fontColorBlack};
    font-family: ${(props) => props.theme.fontFamily};
`

export const TaskTime = styled.span`
    font-size: 10px;
    color: ${(props) => props.theme.fontColorBlack};
    font-family: ${(props) => props.theme.fontFamily};
`

export const Tree = styled.div`
    display: flex;
    flex-wrap:wrap;
    height: 100%;
    gap: 30px;
`

export const MapModalHeading = styled.h3`
    font-size: 24px;
    font-weight: 600;
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0;
    padding: 0;
`

export const MapModalTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.fontColorGrey};
`

export const MapModalProgress = styled.span`
    
`

export const MapModalTeam = styled.span`

`