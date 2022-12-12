import styled from "styled-components";

const Footer = () => {
  // Scroll to top button
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <ContainerFooter>
      <ContainerTopButton onClick={topFunction}>To the top</ContainerTopButton>
    </ContainerFooter>
  );
};

export default Footer;

const ContainerFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0.1rem;
  width: 100%;
  height: 1.4rem;
  text-align: center;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const ContainerTopButton = styled.button``;
