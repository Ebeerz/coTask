import {Routes, Route} from 'react-router-dom';

import Modal from "../layout/modal/modal";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";
import LoginPage from "../pages/login-page/login-page";
import { GlobalStyle } from "./styles";
import { useState} from "react";
import ProfilePage from '../pages/profile-page/profile-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import ProtectedRoute from '../protected-route/protected-route';


function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState('');

  return (
    <>
      <GlobalStyle/>
        {/* {!token ? <LoginPage/> : <MainPage setModalActive={setModalActive} setModalContent={setModalContent}/>} */}
      <Routes>
        <Route path='/' element={<PageWrapper></PageWrapper>}>
          <Route index element={
            <ProtectedRoute>
              <MainPage setModalActive={setModalActive} setModalContent={setModalContent}/>
            </ProtectedRoute>
          }/>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='profile' element={
            <ProtectedRoute>
              <ProfilePage/>
            </ProtectedRoute>
          }/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>{modalContent}</Modal>
    </>
  )
}

export default App
