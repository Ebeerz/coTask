import { useContext } from "react";

import { StyledHeader} from "./styles"
import { StyledLogo } from "../../blocks/logo/logo";
import Nav from "../nav/nav";
import { UserContext } from "../../../context/user-context";
import Avatar from "../../blocks/avatar/avatar";

function Header() {
  const [token] = useContext(UserContext);
  return (
    <StyledHeader>
      {token && <Nav></Nav>}
        <StyledLogo to="/">
            <img alt="logo" src="/assets/logo.png"/>
        </StyledLogo>
        {token && <Avatar/>}
    </StyledHeader>
  )
}

export default Header;