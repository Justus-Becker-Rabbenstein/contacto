import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFooter>
      <button>
        <a href="#">Back to the top</a>
      </button>
    </ContainerFooter>
  );
};

export default Footer;

const ContainerFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0.3rem;
  width: 100%;
  height: 1rem;
  text-align: center;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
