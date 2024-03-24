import styled from "styled-components";
import { Avatar } from "../../blocks/avatar/avatar";

export const StyledHeader = styled.header`
    display: flex;
    padding-left: 36px;
    padding-right: 36px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: ${(props) => props.theme.headerHeight};
    padding-top: 0;
    padding-bottom: 0;
    background-color: ${(props) => props.theme.headerColor};
    align-items: center;
    box-sizing: border-box;
`

export const StyledAvatar = styled(Avatar)`
    position:relative;
    &:after {
        content: "";
        transform: rotate(90deg);
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        background-image: url('../../../../public/assets/arrow.svg');
        background-repeat: no-repeat;
        left: 40px;
        top: 15px;
    }
`
