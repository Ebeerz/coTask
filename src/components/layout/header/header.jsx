import { StyledHeader, StyledAvatar} from "./styles"
import { StyledLogo } from "../../blocks/logo/logo";
import Nav from "../nav/nav";


function Header() {
  return (
    <StyledHeader>
      <Nav></Nav>
        <StyledLogo href="/">
            <img alt="logo" src="../../../../public/assets/logo.png"/>
        </StyledLogo>
        <StyledAvatar $marginLeft="auto" $marginRight="67px">
          <img alt="avatar" src="../../../../public/assets/avatar-template.svg"/>
        </StyledAvatar>
    </StyledHeader>
  )
}

export default Header;