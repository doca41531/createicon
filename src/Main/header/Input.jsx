import styled from "styled-components";
const SearchInput = styled.input`
    &::placeholder{
		color: #9BC9FF;
	}
    padding: 10px;
    font-size: 20px;
    background-color: rgba(#9BC9FF);
    border-radius: 15px;
    width: 100%;
    height: 100%;
    border: none;
`
const SearchImg = styled.img`
`
const SearchImgDiv = styled.div`
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    display: inline;
    position: absolute;
    background-color: #9BC9FF; 
    width: 12%;
    height: 85%;
    right: 10px;
    top: 5px;
`
const SearchDiv = styled.div`
    height: 7vh;
    margin: 30px;
    position: relative;
`
function Input() {

    return(
            <SearchDiv>
                <SearchInput type="text" placeholder="찾으시는 아이콘을 입력해주세요" />
                <SearchImgDiv><SearchImg src="image/Search.png" alt="#"  /></SearchImgDiv>
            </SearchDiv>
    )
}

export default Input