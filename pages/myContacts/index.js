import styled from "styled-components";

const myContacts = ({userArray}) => {
  return (
    <article>
      <header>
        <h2>My Contacts</h2>
      </header>
      {userArray.map(singleUser => {
        return (
          <ContainerSection key={`key-section-${singleUser.id}`}>
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
  border-radius: 10px;
  width: 80vw;
  margin: 10px auto;
  background-image: url("isis-franca-4uZXCWaseNE-unsplash.jpg");
  background-size: cover;
`;
const ContainerProfileImage = styled.img`
  position: absolute;
  right: -10px;
  border-radius: 100%;
  height: 6em;
  width: 6em;
  border: 1px solid hotpink;
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
  overflow: hidden;
  margin: 3px;
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
`;
