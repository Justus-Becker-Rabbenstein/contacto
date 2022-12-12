import styled from "styled-components";
import Link from "next/link";
import {useState} from "react";
import Lottie from "react-lottie";
import animationData from "../../lotties/search.json";

const MyContacts = ({userArray, onClickedUserName}) => {
  // Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
        <ContainerLottieDiv>
          <Lottie options={defaultOptions} height="100px" width="100px" />
        </ContainerLottieDiv>
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
                <ContainerIcon
                  src="images/icon_contact/icon_name.svg"
                  alt="Icon of name"
                />
                <ContainerParagraph>{singleUser.name}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon
                  src="images/icon_contact/icon_address.svg"
                  alt="Icon of address"
                />
                <ContainerParagraph>{singleUser.address}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon
                  src="images/icon_contact/icon_email.svg"
                  alt="Icon of email"
                />
                <ContainerParagraph>{singleUser.email}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon
                  src="images/icon_contact/icon_phone.svg"
                  alt="Icon of phone"
                />
                <ContainerParagraph>{singleUser.phone}</ContainerParagraph>
              </ContainerDiv>
              <ContainerDiv>
                <ContainerIcon
                  src="images/icon_contact/icon_website.svg"
                  alt="Icon of website"
                />
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
  object-fit: cover;
`;
const ContainerHeader = styled.header`
  width: 80%;
`;
const ContainerDiv = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  margin: 3px;
  &:last-child {
    margin-bottom: 10%;
  }
`;
const ContainerParagraph = styled.p`
  padding-left: 3px;
`;
const ContainerIcon = styled.img`
  width: 3rem;
  align-self: center;
  height: fit-content;
`;
const ContainerSearchInput = styled.input`
  background-image: url("images/icon_search/icon_search.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  background-position-x: 0.3rem;
  padding-left: 2rem;

  width: 75%;
  margin-left: 10%;
  margin-bottom: 5%;
  margin-top: 2%;
`;
const ContainerLottieDiv = styled.div`
  position: absolute;
  right: 0;
  top: 13%;
`;
