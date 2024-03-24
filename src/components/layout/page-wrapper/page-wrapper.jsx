import Header from "../header/header";
import { StyledPageWrapper } from "./styles";

// Обёртка для контента страниц
function PageWrapper (){
  return (
    <>
      <Header />
      <StyledPageWrapper>
        {/* main content */}
      </StyledPageWrapper>
    </>
  );
}

export default PageWrapper;