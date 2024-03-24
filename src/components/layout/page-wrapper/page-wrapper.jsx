import MainPage from "../../pages/main-page/main-page";
import Header from "../header/header";
import { StyledPageWrapper } from "./styles";

// Обёртка для контента страниц
function PageWrapper (){
  return (
    <>
      <Header />
      <StyledPageWrapper>
        <MainPage/>
      </StyledPageWrapper>
    </>
  );
}

export default PageWrapper;