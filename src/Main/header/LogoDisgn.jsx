import styled from "styled-components"

const LogoImg = styled.img`
    width: 120px;
    height: 120px;
`

function Logo() {
    return(
        <>
            <LogoImg src="image/CpLogo.png" alt="로그이미지" />
        </>
    )
}

export default Logo