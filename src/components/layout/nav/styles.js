import styled from "styled-components";

export const StyledBurger = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    margin-right: 16px;
    background-color: transparent;
    cursor: pointer;
    background-image: url('../../../../public/assets/burger.svg');
`

export const SideBar = styled.nav`
    background-color: ${(props) => props.theme.colorWhite};
    padding-top: 14px;
    padding-left: 36px;
    padding-right: 24px;
    width: 305px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${(props) => props.$sidebar ? `-100%` : `0%`};
    transition: 850ms;
    z-index: 100;
`

export const SideBarTop = styled.div`
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`

export const CloseButton = styled.button`
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-image: url('../../../../public/assets/closeButton.svg');
`

export const StyledList = styled.ul`
    &:before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        background-image: url('../../../../public/assets/arrow.svg');
        background-repeat: no-repeat;
        left: -15px;
        top: 6px;
    }
    cursor: pointer;
    list-style-type: none;
    margin: 0;
    margin-left: 28px;
    margin-bottom: 16px;
    padding: 0;
    position: relative;
    font-family: ${(props) => {props.theme.fontFamily}}
    font-size: ${(props) => {props.theme.fontSizeDefault}}
`