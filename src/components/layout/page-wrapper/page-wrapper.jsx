import { useContext } from "react";
import { UserContext } from "../../../context/user-context";
import { StyledPageWrapper } from "./styles";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";


function PageWrapper (props){
  const [token] = useContext(UserContext);
  return (
    <>
      <StyledPageWrapper>
        {!token ? <LoginPage/> : <MainPage {...props}/>}
      </StyledPageWrapper>
    </>
  );
}

export default PageWrapper;