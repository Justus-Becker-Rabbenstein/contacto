import Link from "next/link";
import styled from "styled-components";
import Lottie from "react-lottie";
/* Link for mascot animation
  / https://lottiefiles.com/91650-contact-me */
import animationData from "../../lotties/mascot.json";

const Header = ({menuClickStatus, onNavbarClick}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  //Sets bool value to render or not render navbar menu
  function handleMenuClickStatus() {
    onNavbarClick(!menuClickStatus);
  }
  return (
    <>
      <ContainerHeader menuClickStatus={menuClickStatus}>
        <ContainerUl>
          <ContainerParagraph>contacto</ContainerParagraph>
          <ContainerImgMenu
            src="burger_menu.png"
            alt="Burger menu"
            width="25%"
            height="25%"
            onClick={handleMenuClickStatus}
          />
          <Lottie
            options={defaultOptions}
            height="25%"
            width="25%"
            style={{margin: 0}}
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
          <ContainerButton onClick={handleMenuClickStatus}>
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
  flex-direction: row;
  justify-content: space-evenly;
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
const ContainerImgMenu = styled.img``;
const ContainerParagraph = styled.p`
  align-self: center;
  font-weight: bolder;
  border-top: 1px solid #001533;
  border-bottom: 1px solid #001533;
  color: #001533;
`;
