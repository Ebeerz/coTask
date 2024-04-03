import Header from "../header/header";
import { StyledPageWrapper } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper (){
  return (
    <>
      <Header/>
      <StyledPageWrapper>
        <Outlet/>
      </StyledPageWrapper>
    </>
  );
}

export default PageWrapper;