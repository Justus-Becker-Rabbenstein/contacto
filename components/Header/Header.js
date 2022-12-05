import Link from "next/link";
import styled from "styled-components";

const Header = ({menuClickStatus, onNavbarClick}) => {
  // https://lottiefiles.com/91650-contact-me
  // Link for mascot animation
  return (
    <>
      <ContainerHeader menuClickStatus={menuClickStatus}>
        <ContainerUl>
          <ContainerPictureTag>
            <ContainerImgMenu
              src="burger_menu.png"
              alt="Burger menu"
              width="30%"
              onClick={() => onNavbarClick(!menuClickStatus)}
            />
          </ContainerPictureTag>
          <ContainerImgMascot src="cat-logo.svg" alt="mascot of contacto" />
        </ContainerUl>
      </ContainerHeader>
      {menuClickStatus ? (
        <ContainerNav>
          <ContainerButton>
            <Link href="/myProfile">Myself</Link>
          </ContainerButton>
          <ContainerButton>
            <Link href="/myContacts">My Contacts</Link>
          </ContainerButton>
          <ContainerButton>
            <Link href="/addContact">Add Contact</Link>
          </ContainerButton>
          <ContainerButton>
            <Link href="/">Logout</Link>
          </ContainerButton>
        </ContainerNav>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;

const ContainerHeader = styled.header`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const ContainerUl = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;
const ContainerImgMascot = styled.img`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  position: relative;
  bottom: -50px;
`;
const ContainerNav = styled.nav`
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
const ContainerButton = styled.button`
  background-image: url(icon_name.svg);
  background-repeat: no-repeat;
  background-position: left;
  padding-left: 20px;
  height: 100%;
  width: 33%;
  margin-left: 33%;
`;
const ContainerImgMenu = styled.img``;
const ContainerPictureTag = styled.picture`
  grid-column: 3 / 3;
  grid-row: 1 / 1;
  align-self: end;
`;
