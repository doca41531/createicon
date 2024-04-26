import styled from "styled-components"
const Div = styled.div`
    font-size: 20px;
    /* font-weight: bold; */
    margin-top: 30px;
`
const A = styled.a` 
    /* margin: 70px 90px 0 0; */
    /* font-size: 20px; */
    margin-right: 90px;
    /* margin-top: 70px; */
`

function Auth() {
    return(
        <>
            <Div>
                <A href="#">login</A>
                <A href="#">sign up</A>
            </Div>
        </>
    )
}
export default Auth