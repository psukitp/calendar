import styled from "styled-components";

export const HeaderDiv = styled.header`
width:100%;
height: 70px;
padding: 15px 30px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const SiderDiv = styled.div`
display: flex;
align-items: center;
max-width:90px;
width: 100%;
justify-content:space-between;
`

export const DateDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width:415px;
width: 100%;
`

export const SettingsDiv = styled.div`
max-width:250px;
width: 100%;
display: flex;
justify-content:space-between;
`

//TODO: delete when logo and other is done
export const MockLogo = styled.div`
width: 40px;
height: 40px;
background-color: #F9F9F9;
display: flex;
align-items: center;
justify-content: center;
`


export const OpenSiderButtonDiv = styled.button`
    width: 20px;
    height: 20px;
    background-color: transparent;
`

export const DayWordbutton = styled.button`
    width: 110px;
    height: 40px;
    border: 1px #000 solid;
    display: flex;
    align-items:center;
    padding-left: 10px;
    position: relative;
    font-family: 'Montserrat';
`
export const CurrentDateDiv = styled.div`
    width: 21px;
    height: 20px;
    background-color: #fff;
    padding: 2px;
    right: -11px;
    position: absolute;
    font-family: 'Montserrat';
`

export const MonthArrowsDiv = styled.div`
    display:flex;
    gap:20px;
`

export const DatePickerDiv = styled.button`
    height: 26px;
    width: 165px;
    text-align:center;
    border:1px solid #000;
`

export const CalendatFormatDiv = styled.button`
    padding: 10px;
    max-width:100px;
    width: 100%;
    border:1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`