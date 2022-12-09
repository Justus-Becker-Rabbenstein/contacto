import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/singlecontact.json";

const singleProfile = ({userArray, loginName, clickedName}) => {
  // Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
              <Lottie options={defaultOptions} height="5rem" width="5rem" />
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

const ContainerParentTextarea = styled.textarea`
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;
  padding-left: 3rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;
const ContainerParentButton = styled.button`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
const ContainerTextareaName = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_name.svg");
  border-radius: 1.5rem;
  width: 15rem;
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
const ContainerDivFlex = styled.div`
  display: flex;
`;
const ContainerButtonVisitWebsite = styled(ContainerParentButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_visit_website.svg");
`;
const ContainerButtonSendEmail = styled(ContainerParentButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_sendemail.svg");
`;
const ContainerButtonPhone = styled(ContainerParentButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_call_phone.svg");
`;
const ContainerButtonRouteGooglemaps = styled(ContainerParentButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_route_googlemaps.svg");
`;
const ContainerLottie = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
`;
