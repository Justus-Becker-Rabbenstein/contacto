import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerUl>
        <picture>
          <img src="burger_menu.svg" alt="Burger menu" />
        </picture>
        <ContainerImgMascot src="cat-logo.svg" alt="mascot of contacto" />
        <ContainerLiContactoText>contacto</ContainerLiContactoText>
      </ContainerUl>
    </ContainerHeader>
  );
};

export default Header;

const ContainerHeader = styled.header`
  background-image: url("isis-franca-4uZXCWaseNE-unsplash.jpg");
  background-size: cover;
  border: 2px solid black;
`;
const ContainerUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
`;
const ContainerImgMascot = styled.img`
  position: absolute;
  top: 0px;
`;
const ContainerLiContactoText = styled.li`
  color: #a92525;
  font-size: large;
  border-top: 3px solid #a92525;
  border-bottom: 3px solid #a92525;
  -webkit-text-stroke: 1px white;
`;
