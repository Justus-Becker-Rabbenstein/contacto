import styled from "styled-components";
import Link from "next/link";

const myContacts = ({userArray, onClickedUserName}) => {
  return (
    <article>
      <header>
        <h6>Login/My Contacts</h6>
      </header>
      {userArray.map(singleUser => {
        return (
          <Link
            href="/singleProfile"
            onClick={function () {
              onClickedUserName(singleUser.name);
            }}
            key={`key-section-${singleUser.id}`}
          >
            <ContainerSection>
              <ContainerProfileImage
                src={singleUser.image}
                alt={singleUser.name}
                height="50vh"
                width="50vw"
              />
              <ContainerHeader>
                <h3>{singleUser.name}</h3>
              </ContainerHeader>
              <Container>
                <ContainerIcon src="icon_name.svg" alt="Icon of name" />
                <ContainerParagraph>{singleUser.name}</ContainerParagraph>
              </Container>
              <Container>
                <ContainerIcon src="icon_address.svg" alt="Icon of address" />
                <ContainerParagraph>{singleUser.address}</ContainerParagraph>
              </Container>
              <Container>
                <ContainerIcon src="icon_email.svg" alt="Icon of email" />
                <ContainerParagraph>{singleUser.email}</ContainerParagraph>
              </Container>
              <Container>
                <ContainerIcon src="icon_phone.svg" alt="Icon of phone" />
                <ContainerParagraph>{singleUser.phone}</ContainerParagraph>
              </Container>
              <Container>
                <ContainerIcon src="icon_website.svg" alt="Icon of website" />
                <ContainerParagraph>{singleUser.website}</ContainerParagraph>
              </Container>
            </ContainerSection>
          </Link>
        );
      })}
    </article>
  );
};

export default myContacts;

const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80vw;
  margin: 10px auto;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    border: 3px solid red;
  }
`;
const ContainerProfileImage = styled.img`
  position: absolute;
  right: -5%;
  top: -5%;
  border-radius: 100%;
  height: 6em;
  width: 6em;
  border: 1px solid white;
`;
const ContainerHeader = styled.header`
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  height: auto;
  margin: 3px;
  &:nth-child(7) {
    margin-bottom: 10%;
  }
`;
const ContainerParagraph = styled.p`
  line-height: 0px;
  padding-left: 3px;
`;
const ContainerIcon = styled.img`
  width: 35px;
  margin: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: -6px;
`;
