import styled from "styled-components"
import Auth from "./Auth"
import Logo from "./LogoDisgn"
import MainContant from "./MainContant"

const Div = styled.div`
        /* display: flex; */
`

const UpDiv = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
`

const DownDiv = styled.div`
    width: 100vw;
    height: 64vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`
function MainHeaderIndex() {
    return(
        <>
            <Div>
                <UpDiv>
                    <Logo/>
                    <Auth/>
                </UpDiv>
                <DownDiv>
                    <MainContant/>
                </DownDiv>
            </Div>
        </>
    )
}

export default MainHeaderIndex