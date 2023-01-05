import Link from "next/link";
import styled from "styled-components";

const Help = () => {
  return (
    <>
      <ContanerWholePage>
        <ContainerHelptextDiv>
          <p>
            First visit?
            <hr />
            Go to add contact to create your own login name as well as your
            contacts. After that, open the burger menu to logout and login as
            one of the users you created.
          </p>
        </ContainerHelptextDiv>
        <ContainerAddUserLink href="/addContact">
          To add user
        </ContainerAddUserLink>
        <ContainerBackLink href="/">Back</ContainerBackLink>
      </ContanerWholePage>
    </>
  );
};

export default Help;

const ContanerWholePage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const ContainerHelptextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 15rem;
  margin-top: 10%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const ContainerAddUserLink = styled(Link)`
  display: flex;
  align-self: center;
  -webkit-align-items: center;
  padding-left: 5rem;
  width: 15rem;
  height: 2.5rem;
  margin-top: 10%;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 120px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  background-image: url("images/icon_header/icon_links.svg");
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position-x: 0.5rem;
  background-position-y: 0.5rem;
`;
const ContainerBackLink = styled(ContainerAddUserLink)`
  padding-left: 6rem;
`;
