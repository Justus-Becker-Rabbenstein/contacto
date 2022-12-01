import Link from "next/link";
import styled from "styled-components";

const Header = ({menuClickStatus, onNavbarClick}) => {
  return (
    <>
      <ContainerHeader menuClickStatus={menuClickStatus}>
        <ContainerUl>
          <picture>
            <img
              src="burger_menu.svg"
              alt="Burger menu"
              onClick={() => onNavbarClick(!menuClickStatus)}
            />
          </picture>
          <ContainerImgMascot src="cat-logo.svg" alt="mascot of contacto" />
          <ContainerLiContactoText>contacto</ContainerLiContactoText>
        </ContainerUl>
        {menuClickStatus ? (
          <ContainerNav>
            <ContainerButton>
              <Link href="#">Myself</Link>
            </ContainerButton>
            <ContainerButton>
              <Link href="/myContacts">My Contacts</Link>
            </ContainerButton>
            <ContainerButton>
              <Link href="#">Add Contacts</Link>
            </ContainerButton>
            <ContainerButton>
              <Link href="/">Logout</Link>
            </ContainerButton>
          </ContainerNav>
        ) : (
          ""
        )}
      </ContainerHeader>
    </>
  );
};

export default Header;

const ContainerHeader = styled.header`
  background-image: url("isis-franca-4uZXCWaseNE-unsplash.jpg");
  background-size: cover;
  border: 2px solid black;
  transition: 2s ease;
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
const ContainerNav = styled.nav`
  background-image: url("isaac-quesada-rjnT5-cQPPY-unsplash.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
const ContainerButton = styled.button`
  background-image: url(nav_myself.svg);
  background-repeat: no-repeat;
  background-position: left;
  padding-left: 20px;
  height: 100%;
`;
