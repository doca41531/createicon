import styled from "styled-components"
import Input from "./Input"

const Div = styled.div`
    text-align: center;
`
const BoldText = styled.div`
    font-weight: bold;
    font-size: 40px;
    margin: 10px;
`
const Text = styled.p`
    font-size: 25px;
    color: gray;

`
function MainContant() {
    return(
        <>  
            <Div>
                <BoldText>
                    <p>CREATE ICON 에서</p>
                    <p>필요한 아이콘을 찾아보세요!</p>
                </BoldText>
                <div>
                    <Text>CREATE ICON  에서 마음에 드는 아이콘에 좋아요</Text>
                    <Text>를 누르거나 관심 버튼을 눌러 관심 목록에 저장할 </Text>
                    <Text>수 있고 쉽게 다운로드 받을 수 도 있습니다.</Text>
                </div>
                <Input/>
            </Div>
        </>
    )
}

export default MainContant