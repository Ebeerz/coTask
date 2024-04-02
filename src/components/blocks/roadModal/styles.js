import styled from "styled-components"
export const ModalContainer = styled.div`
    min-height: 643px;
    min-width: 624px;
    padding: 36px 42px 36px 42px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const ModalSubheading = styled.span`
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 12px;
    color: #6C757D;
    margin-bottom: 8px;
    `
export const ModalHeading = styled.h2`
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.fontColorBlack};
`
export const PropertyHeading = styled.label`
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
    color: #6C757D;
    margin-bottom: 8px;
`

export const PropertyContainer = styled.div`
    display:flex;
    flex-direction: column;
`


export const DateContainer = styled.div`
    width: 258px;
    display: flex;
    column-gap: 16px;
`
export const DateInput = styled.input`
    background-color: ${(props) => props.theme.mainBackgroundColor};
    width: 114px;
    height: 35px;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
    color: ${(props) => props.theme.fontColorBlack};
    border: none;
    border-radius: 8px;
`

export const WorkDataContainer = styled.div`
    display: flex;
    column-gap: 16px;
`

export const WorkHours = styled.span`
    width: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.mainBackgroundColor};
    height: 35px;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
    color: ${(props) => props.theme.fontColorBlack};
    border-radius: 4px;
`

export const ProgressContainer = styled.div`
    width: 540px;
    display:flex;
    flex-direction: column;    
    row-gap: 10px;
    position: relative;
`

export const ProgressBar = styled.input`
    width: 500px;
    height: 8px;
    border-radius: 30px;
    background: ${(props) => props.theme.unactiveTabColor};
    position:relative;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width:16px;
        height: 16px;
        border-radius: 50%; 
        background: #ffffff;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: none;
        background: ${(props) => props.theme.unactiveTabColor};
        cursor: pointer;
    }
`

export const ProgressValue = styled.span`
    position: absolute;
    right: -8px;
    top: 25px;
`

export const DescriptionContainer = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;
    column-gap: 8px;
`

export const DescriptionInput = styled.textarea`
    background-color: ${(props) => props.theme.mainBackgroundColor};
    border:none;
    border-radius: 4px;
    width: 540px;
    min-height: 120px;
    padding: 16px 20px 16px 20px;
    box-sizing:border-box;
    color: #6C757D;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 14px;
    resize: none;
    &:focus {
        border: none;
        outline: none;
    }
`

export const DependencyContainer = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;
    column-gap: 8px;
`

export const DependencyList = styled.ul`
    display: grid;
    width: 100%;
    grid-template-columns: 239px 239px;
    column-gap: 30px;
    row-gap: 20px;
    list-style-type: none;
`

export const DependencyItem = styled.li`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-width: 239px;
    min-height: 51px;
    padding: 16px;
    background-color: ${(props) => props.theme.colorWhite};
    border-radius: 8px;
    font-size:14px;
    font-family: ${(props)=> props.theme.fontFamily};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`