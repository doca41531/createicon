import MainHeaderIndex from "./header"
import styled from "styled-components";
const MainDiv = styled.div`
`
const Div = styled.div`
    background: url("image/Ellipse 3 (2).png");
    background-size: cover;
    /* background: linear-gradient(to right, #009dff18, #f718a515); */
    /* opacity: 2; */
    /* border-radius: 70px; */
    /* border: 1px solid black; */
    width: 100%;
    height: 700px;
    position: absolute;
    z-index: -1;
`
function Index() {
    return(
        <MainDiv>
            <Div/>
            <MainHeaderIndex/>
        </MainDiv>
    )
}
export default Index