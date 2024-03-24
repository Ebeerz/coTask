/* eslint-disable react/prop-types */
import { ModalButton, ModalContent, StyledModal } from "./styles";
function Modal ({setModalActive, children}){
    return (
    <>  
        <StyledModal>
            <ModalContent>
            <ModalButton
            onClick={() => {
              setModalActive(false);
            }}
          >
            X
          </ModalButton>
          {children}
            </ModalContent>
        </StyledModal>
    </>
  );
}

export default Modal;