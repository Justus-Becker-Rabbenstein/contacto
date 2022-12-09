import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Header = ({menuClickStatus, onNavbarClick, onSubmitLogin}) => {
  //Sets bool value to render or not render navbar menu
  function handleMenuClickStatus() {
    onNavbarClick(!menuClickStatus);
  }
  function handleMenuClickLogout() {
    onNavbarClick(!menuClickStatus);
    onSubmitLogin("User Name");
  }

  return (
    <>
      <ContainerHeader menuClickStatus={menuClickStatus}>
        <ContainerUl>
          <ContainerParagraph>contacto</ContainerParagraph>
          <ContainerImgMenu
            src="images/icon_header/burger_menu.png"
            alt="Burger menu"
            onClick={handleMenuClickStatus}
          />
          <Image
            src="/images/icon_header/mascot.svg"
            alt="contacto mascot"
            width={75}
            height={75}
          />
        </ContainerUl>
      </ContainerHeader>
      {menuClickStatus ? (
        <ContainerNav>
          <ContainerButton onClick={handleMenuClickStatus}>
            <Link href="/myProfile">Myself</Link>
          </ContainerButton>
          <ContainerButton onClick={handleMenuClickStatus}>
            <Link href="/myContacts">My Contacts</Link>
          </ContainerButton>
          <ContainerButton onClick={handleMenuClickStatus}>
            <Link href="/addContact">Add Contact</Link>
          </ContainerButton>
          <ContainerButton onClick={handleMenuClickLogout}>
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
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
const ContainerImgMenu = styled.img`
  width: 15%;
  height: 15%;
  align-self: center;
  &:active {
    background-color: #cff5e7;
  }
  @media (min-width: 900px) {
    width: 10%;
  }
  @media (min-width: 1200px) {
    width: 5%;
  }
`;
const ContainerParagraph = styled.p`
  align-self: center;
  font-weight: bolder;
  border-top: 1px solid #0d4c92;
  border-bottom: 1px solid #0d4c92;
  color: #0d4c92;
`;
