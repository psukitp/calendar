import styled from "styled-components";
import { Header } from "../Header/Header";

const WrapperDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
`

export const Wrapper = () => {
    return (
        <WrapperDiv>
            <Header />
        </WrapperDiv>
    )
}