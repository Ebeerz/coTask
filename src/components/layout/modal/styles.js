import styled from "styled-components";

export const StyledModal = styled.div`
    height:100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: ${(props) => props.active ? `0` : `1`};
`

export const ModalContent = styled.div`
    padding: 40px;
    background-color: ${(props) => props.theme.colorWhite};
    min-height: 500px;
    min-width: 550px;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ModalButton = styled.button`
    border: none;
    background-color: ${(props) => props.theme.colorWhite};
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
`