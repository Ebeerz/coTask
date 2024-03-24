import styled from "styled-components";


export const ProjectHeader = styled.p`
    display: block;
    height: ${(props) => props.theme.headerHeight};
    padding: 0px 130px 0px 256px;
    margin: 0;
    display: flex;
    justify-content: space-between;
`

export const ProjectName = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Deadline = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MainSection = styled.section`
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
    width: 100vw;
    background-color: ${(props) => props.theme.mainBackgroundColor};
    padding: 16px 130px 0px 130px;
`