import styled from "styled-components";

export const PropertyText = styled.span`
    background-color: ${(props) => props.theme.mainBackgroundColor};
    display: block;
    border:none;
    border-radius: 4px;
    width: 540px;
    min-height: 35px;
    padding: 8px 16px;
    box-sizing:border-box;
    color: ${(props) => props.theme.fontColorBlack};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
`