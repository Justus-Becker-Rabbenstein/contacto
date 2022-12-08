import styled from "styled-components";
import Link from "next/link";
import {useState} from "react";

const MyContacts = ({userArray, onClickedUserName}) => {
  // useState Array for manipulation during search
  const [userArraySearch, setUserArraySearch] = useState(userArray);

  const onSearchInput = event => {
    const searchQueryLowerCase = event.target.value.toLowerCase();
    const displayedItems = userArray.filter(user =>
      user.name.toLowerCase().startsWith(searchQueryLowerCase)
    );
    setUserArraySearch(displayedItems);
  };

  return (
    <article>
      <header>
        <h6>Login/My Contacts</h6>
        <ContainerSearchInput
          type="text"
          placeholder="Search by name ..."
          onChange={onSearchInput}
        />
      </header>
      {userArraySearch.map(singleUser => {
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
              <ContainerDiv>
                <ContainerIcon src="icon_name.svg" alt="Icon of name" />
                <ContainerParagraph>{singleUser.name}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon src="icon_address.svg" alt="Icon of address" />
                <ContainerParagraph>{singleUser.address}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon src="icon_email.svg" alt="Icon of email" />
                <ContainerParagraph>{singleUser.email}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon src="icon_phone.svg" alt="Icon of phone" />
                <ContainerParagraph>{singleUser.phone}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon src="icon_website.svg" alt="Icon of website" />
                <ContainerParagraph>{singleUser.website}</ContainerParagraph>
              </ContainerDiv>
            </ContainerSection>
          </Link>
        );
      })}
    </article>
  );
};

export default MyContacts;

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
    border: 3px solid #cff5e7;
  }
  &:active {
    background-color: #cff5e7;
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
  width: 80%;
`;
const ContainerDiv = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  height: auto;
  margin: 3px;
  &:last-child {
    margin-bottom: 10%;
  }
`;
const ContainerParagraph = styled.p`
  padding-left: 3px;
`;
const ContainerIcon = styled.img`
  width: 35px;
  margin: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: -6px;
`;
const ContainerSearchInput = styled.input`
  width: 75%;
  margin-left: 10%;
  margin-bottom: 5%;
`;
