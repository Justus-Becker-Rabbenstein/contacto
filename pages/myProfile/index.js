import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/ownprofile.json";

const myProfile = ({loginName, userArray}) => {
  // Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // parses loginName String to Object to be able to compare them in the checkLoggedInUser Method
  const loginNameObject = {name: `${loginName}`};
  const checkLoggedInUser = userArray.filter(user => {
    return user.name == loginNameObject.name;
  });

  return (
    <>
      <h6>Login/My Profile</h6>
      <ContainerDiv>
        <ContainerLottie>
          <Lottie options={defaultOptions} height="5rem" width="5rem" />
        </ContainerLottie>
        {loginName !== "User name" ? (
          checkLoggedInUser.map(user => {
            return (
              <>
                <ContainerProfileImage
                  src={user.image}
                  alt={user.name}
                  height="50vh"
                  width="50vw"
                />
                <ContainerTextareaName disabled value={user.name} />
                <ContainerTextareaAddress disabled value={user.address} />
                <ContainerTextareaEmail disabled value={user.email} />
                <ContainerTextareaPhone disabled value={user.phone} />
                <ContainerTextareaWebsite disabled value={user.website} />
                <ContainerButtonEdit>Edit</ContainerButtonEdit>
              </>
            );
          })
        ) : (
          <p>No Data Found.</p>
        )}
      </ContainerDiv>
    </>
  );
};

export default myProfile;

const ContainerParentTextarea = styled.textarea`
  background-repeat: no-repeat;
  padding-left: 3rem;
  border-radius: 1.5rem;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;
`;
const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 10%;
  width: 80%;
  gap: 0.1rem;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
const ContainerTextareaName = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_name.svg");
`;
const ContainerTextareaAddress = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_address.svg");
`;
const ContainerTextareaEmail = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_email.svg");
`;
const ContainerTextareaPhone = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_phone.svg");
`;
const ContainerTextareaWebsite = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_website.svg");
`;
const ContainerProfileImage = styled.img`
  border-radius: 100%;
  height: 8em;
  width: 8em;
  border: 1px solid #001533;
  margin-bottom: 5%;
  margin-top: 5%;
  object-fit: cover;
`;

const ContainerButtonEdit = styled.button`
  width: 15rem;
  height: 2rem;
  margin-top: 10%;
  margin-bottom: 10%;

  background-image: url("images/icon_buttons/button_edit.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 1.5rem;
  background-position-x: 0.3rem;
  background-position-y: 0.1rem;
`;
const ContainerLottie = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
`;
