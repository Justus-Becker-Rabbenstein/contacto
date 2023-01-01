import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/singlecontact.json";
import lottieConfig from "../../hooks/lottieConfig";
import {useFormik} from "formik";
import {ContainerParentTextarea} from "../../styles/styledTextarea";
import {ContainerParentButton} from "../../styles/styledButton";
import {ContainerParentProfileImage} from "../../styles/styledProfileImage";
import UploadWidget from "../../utils/UploadWidget";
import {cloudImgUrl} from "../../utils/UploadWidget";

const SingleProfile = ({
  users,
  loginName,
  clickedName,
  onClickedUserName,
  onUpdateUser,
  onClickDeleteUser,
}) => {
  // find logged in User and the clicked user from my contacts
  const ownProfileUser = users.find(user => user.name === loginName);
  const clickedFilteredSingleUser = users.find(
    user => user.name === clickedName
  );

  /* Start: All button handlers */
  //handles click on visit website
  function onClickVisitWebsite() {
    window.open(`${clickedFilteredSingleUser.website}`, "_blank");
  }
  //handles click on email send
  function onClickEmail() {
    window.location.href = `mailto:${clickedFilteredSingleUser.email}?subject=Hi from contacto!&body=Type%20your%20message`;
  }
  //handles click on call phone
  function onClickCallPhone() {
    window.open(`tel:${clickedFilteredSingleUser.phone}`);
  }
  // function click on calculate google maps route
  function onClickGooglemaps() {
    window.open(
      `https://www.google.de/maps/dir/${ownProfileUser.address}/${clickedFilteredSingleUser.address}`,
      "_blank"
    );
  }
  /* End: All button handlers */

  /* Start: Update User Data */

  // this updates the data in the user data array
  // Form Submit Logic with Formik library for React (Textareas)
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: clickedFilteredSingleUser,
    enableReinitialize: true,
    onSubmit: values => {
      values.image = imgFunction();
      onUpdateUser(values);
      onClickedUserName(values.name);
      alert("Contact profile successfully updated.");
    },
  });
  // Logic for switching image based on new upload or same like before
  function imgFunction() {
    try {
      return cloudImgUrl.info.url;
    } catch (error) {
      return values.image;
    }
  }
  /* End: Update User Data */

  /* Start: Delete User */
  function handleDelete() {
    // method confirm returns true if ok and false if cancel, needed for if
    const confirmVar = confirm(
      "Do you wish to delete currently selected contact?"
    );
    if (confirmVar === true) {
      onClickDeleteUser(clickedFilteredSingleUser.id);
      alert("User successfully deleted.");
    }
  }
  /* End: Delete User */

  return (
    <>
      <h6>Login/My Contacts/Contact Profile</h6>
      {clickedFilteredSingleUser ? (
        <ContainerForm
          key={`key-section-${clickedFilteredSingleUser.id}`}
          onSubmit={handleSubmit}
        >
          <ContainerLottie>
            <Lottie
              options={lottieConfig(animationData)}
              height="5rem"
              width="5rem"
            />
          </ContainerLottie>
          <ContainerProfileImage
            src={values ? values.image : ""}
            alt={values ? values.name : "No image found"}
            height="50vh"
            width="50vw"
          />
          <UploadWidget />
          <ContainerDivFlex>
            <ContainerTextareaName
              value={values ? values.name : "Awaiting data ..."}
              name="name"
              onChange={handleChange}
            />
          </ContainerDivFlex>
          <ContainerDivFlex>
            <ContainerTextareaAddress
              value={values ? values.address : "Awaiting data ..."}
              name="address"
              onChange={handleChange}
            />
            <ContainerButtonRouteGooglemaps
              onClick={onClickGooglemaps}
              type="button"
            ></ContainerButtonRouteGooglemaps>
          </ContainerDivFlex>
          <ContainerDivFlex>
            <ContainerTextareaEmail
              value={values ? values.email : "Awaiting data ..."}
              name="email"
              onChange={handleChange}
            />
            <ContainerButtonSendEmail
              onClick={onClickEmail}
              type="button"
            ></ContainerButtonSendEmail>
          </ContainerDivFlex>
          <ContainerDivFlex>
            <ContainerTextareaPhone
              value={values ? values.phone : "Awaiting data ..."}
              name="phone"
              onChange={handleChange}
            />
            <ContainerButtonPhone
              onClick={onClickCallPhone}
              type="button"
            ></ContainerButtonPhone>
          </ContainerDivFlex>
          <ContainerDivFlex>
            <ContainerTextareaWebsite
              value={values ? values.website : "Awaiting data ..."}
              name="website"
              onChange={handleChange}
            />
            <ContainerButtonVisitWebsite
              onClick={onClickVisitWebsite}
              type="button"
            ></ContainerButtonVisitWebsite>
          </ContainerDivFlex>
          <ContainerDivButtonWrapper>
            <ContainerButtonUpdate type="submit">Update</ContainerButtonUpdate>
            <ContainerButtonDelete type="button" onClick={handleDelete}>
              Delete
            </ContainerButtonDelete>
          </ContainerDivButtonWrapper>
        </ContainerForm>
      ) : (
        <p>No contact data found.</p>
      )}
    </>
  );
};

export default SingleProfile;

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
const ContainerForm = styled.form`
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

const ContainerButtonUpdate = styled(ContainerParentButton)`
  background-image: url("images/icon_buttons/button_edit.svg");
  width: 7rem;
`;
const ContainerButtonDelete = styled(ContainerParentButton)`
  background-image: url("images/icon_singleprofile_buttons/icon_delete.svg");
  width: 7rem;
`;
const ContainerDivButtonWrapper = styled.div`
  display: flex;
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
