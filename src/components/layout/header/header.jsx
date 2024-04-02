import { useContext } from "react";
import { Avatar } from "../../blocks/avatar/avatar";
import { StyledHeader} from "./styles"
import { StyledLogo } from "../../blocks/logo/logo";
import Nav from "../nav/nav";
import { UserContext } from "../../../context/user-context";

function Header() {
  const [token] = useContext(UserContext);
  return (
    <StyledHeader>
      {token && <Nav></Nav>}
        <StyledLogo href="/">
            <img alt="logo" src="/assets/logo.png"/>
        </StyledLogo>
        {token && <Avatar $marginLeft="auto">
          <img alt="avatar" src="/assets/avatar-template.svg"/>
        </Avatar>}
    </StyledHeader>
  )
}

export default Header;