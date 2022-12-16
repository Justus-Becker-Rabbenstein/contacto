import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/singlecontact.json";
import lottieConfig from "../../hooks/lottieConfig";
import {ContainerParentTextarea} from "../../styles/styledTextarea";
import {ContainerParentButton} from "../../styles/styledButton";
import {ContainerParentProfileImage} from "../../styles/styledProfileImage";

const singleProfile = ({userArray, loginName, clickedName}) => {
  //filters logged in user
  const loginNameObject = {name: `${loginName}`};
  const checkLoggedInUser = userArray.filter(user => {
    return user.name == loginNameObject.name;
  });
  // filters single profile of my contacts
  const clickedNameObject = {name: `${clickedName}`};
  const checkClickedUser = userArray.filter(user => {
    return user.name == clickedNameObject.name;
  });
  //handles click on visit website
  function onClickVisitWebsite() {
    window.open(`${checkClickedUser[0].website}`, "_blank");
  }
  //handles click on email send
  function onClickEmail() {
    window.location.href = `mailto:${checkClickedUser[0].email}?subject=Hi from contacto!&body=Type%20your%20message`;
  }
  //handles click on call phone
  function onClickCallPhone() {
    window.open(`tel:${checkClickedUser[0].phone}`);
  }
  // function click on calculate google maps route
  function onClickGooglemaps() {
    window.open(
      `https://www.google.de/maps/dir/${checkLoggedInUser[0].address}/${checkClickedUser[0].address}`,
      "_blank"
    );
  }

  return (
    <>
      <h6>Login/My Contacts/Contact Profile</h6>
      {checkClickedUser.map(user => {
        return (
          <ContainerSection key={`key-section-${user.id}`}>
            <ContainerLottie>
              <Lottie
                options={lottieConfig(animationData)}
                height="5rem"
                width="5rem"
              />
            </ContainerLottie>
            <ContainerProfileImage
              src={user.image}
              alt={user.name}
              height="50vh"
              width="50vw"
            />
            <ContainerDivFlex>
              <ContainerTextareaName disabled value={user.name} />
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaAddress disabled value={user.address} />
              <ContainerButtonRouteGooglemaps
                onClick={onClickGooglemaps}
              ></ContainerButtonRouteGooglemaps>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaEmail disabled value={user.email} />
              <ContainerButtonSendEmail
                onClick={onClickEmail}
              ></ContainerButtonSendEmail>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaPhone disabled value={user.phone} />
              <ContainerButtonPhone
                onClick={onClickCallPhone}
              ></ContainerButtonPhone>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaWebsite disabled value={user.website} />
              <ContainerButtonVisitWebsite
                onClick={onClickVisitWebsite}
              ></ContainerButtonVisitWebsite>
            </ContainerDivFlex>
            <ContainerButtonEdit>Edit</ContainerButtonEdit>
          </ContainerSection>
        );
      })}
    </>
  );
};

export default singleProfile;

const ContainerTextarea = styled(ContainerParentTextarea)`
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 0rem;
  border-top-right-radius: 0rem;
`;
const ContainerMainButton = styled.button`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  :active {
    background-color: #cff5e7;
  }
  &:hover {
    border: 3px solid #cff5e7;
  }
`;
const ContainerSection = styled.section`
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
const ContainerTextareaName = styled(ContainerTextarea)`
  background-image: url("images/icon_contact/icon_name.svg");
  border-radius: 1.5rem;
  width: 15rem;
`;
const ContainerTextareaAddress = styled(ContainerTextarea)`
  background-image: url("images/icon_contact/icon_address.svg");
`;
const ContainerTextareaEmail = styled(ContainerTextarea)`
  background-image: url("images/icon_contact/icon_email.svg");
`;
const ContainerTextareaPhone = styled(ContainerTextarea)`
  background-image: url("images/icon_contact/icon_phone.svg");
`;
const ContainerTextareaWebsite = styled(ContainerTextarea)`
  background-image: url("images/icon_contact/icon_website.svg");
`;
const ContainerProfileImage = styled(ContainerParentProfileImage)``;

const ContainerButtonEdit = styled(ContainerParentButton)`
  background-image: url("images/icon_buttons/button_edit.svg");
`;
const ContainerDivFlex = styled.div`
  display: flex;
`;
const ContainerButtonVisitWebsite = styled(ContainerMainButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_visit_website.svg");
`;
const ContainerButtonSendEmail = styled(ContainerMainButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_sendemail.svg");
`;
const ContainerButtonPhone = styled(ContainerMainButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_call_phone.svg");
`;
const ContainerButtonRouteGooglemaps = styled(ContainerMainButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_route_googlemaps.svg");
`;
const ContainerLottie = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
`;
