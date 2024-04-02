import Header from "../layout/header/header";
import Modal from "../layout/modal/modal";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user-context";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState('');

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <PageWrapper setModalActive={setModalActive} setModalContent={setModalContent}/>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>{modalContent}</Modal>
    </>
  )
}

export default App
