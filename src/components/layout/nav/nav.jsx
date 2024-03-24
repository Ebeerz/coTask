import { StyledLogo } from "../../blocks/logo/logo";
import { StyledBurger, SideBar, SideBarTop, CloseButton, StyledList } from "./styles"
import { useState } from "react";
function Nav () {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
        <StyledBurger onClick={showSidebar}/>
        <SideBar $sidebar={sidebar}>
            <SideBarTop>
                <StyledLogo href="/">
                    <img alt="logo" src="../../../../public/assets/logo.png"/>
                </StyledLogo>
                <CloseButton onClick={showSidebar}/>
            </SideBarTop>
            <StyledList>Проекты</StyledList>
            <StyledList>Команды</StyledList>
        </SideBar>
    </>
    )
}

export default Nav;