import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLogo = styled(Link)`
    width: 88px;
    height: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover,
    active {
        text-decoration: none;
    }
`