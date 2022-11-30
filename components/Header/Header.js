import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
        <ContainerUl>
            <li>test</li>
            <ContainerImgMascot src="cat-logo.svg" alt="mascot of contacto" />
            <li>test2</li>
        </ContainerUl>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.header`
background-image: url("isis-franca-4uZXCWaseNE-unsplash.jpg");
background-size: cover;
border: 2px solid black;
`
const ContainerUl = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
list-style-type: none; 
`
const ContainerImgMascot = styled.img`
position: absolute;
top: 0px;
`