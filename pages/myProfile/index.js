import styled from "styled-components";
import Lottie from "react-lottie";
import {useFormik} from "formik";
import animationData from "../../lotties/ownprofile.json";
import lottieConfig from "../../hooks/lottieConfig";
import {ContainerParentTextarea} from "../../styles/styledTextarea";
import {ContainerParentButton} from "../../styles/styledButton";
import {ContainerParentProfileImage} from "../../styles/styledProfileImage";
import UploadWidget from "../../utils/UploadWidget";
import {cloudImgUrl} from "../../utils/UploadWidget";

const MyProfile = ({loginName, onSubmitLogin, users, onUpdateUser}) => {
  const ownProfileUser = users.find(user => user.name === loginName);

  // this updates the data in the user data array
  // Form Submit Logic with Formik library for React (Textareas)
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: ownProfileUser,
    enableReinitialize: true,
    onSubmit: values => {
      values.image = imgFunction();
      onSubmitLogin(values.name);
      onUpdateUser(values);
      alert("Own profile successfully updated.");
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

  return (
    <>
      <h6>Login/My Profile</h6>
      <ContainerForm onSubmit={handleSubmit}>
        <ContainerLottie>
          <Lottie
            options={lottieConfig(animationData)}
            height="5rem"
            width="5rem"
          />
        </ContainerLottie>
        <ContainerProfileImage
          height="50vh"
          width="50vw"
          src={values ? values.image : ""}
          alt={values ? values.name : "No image found"}
        />
        <UploadWidget />
        <ContainerTextareaName
          value={values ? values.name : "Awaiting data ..."}
          name="name"
          onChange={handleChange}
        />
        <ContainerTextareaAddress
          value={values ? values.address : "Awaiting data ..."}
          name="address"
          onChange={handleChange}
        />
        <ContainerTextareaEmail
          value={values ? values.email : "Awaiting data ..."}
          name="email"
          onChange={handleChange}
        />
        <ContainerTextareaPhone
          value={values ? values.phone : "Awaiting data ..."}
          name="phone"
          onChange={handleChange}
        />
        <ContainerTextareaWebsite
          value={values ? values.website : "Awaiting data ..."}
          name="website"
          onChange={handleChange}
        />
        <ContainerFlexDiv>
          <ContainerButtonUpdate type="submit">Update</ContainerButtonUpdate>
        </ContainerFlexDiv>
      </ContainerForm>
    </>
  );
};

export default MyProfile;

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
const ContainerProfileImage = styled(ContainerParentProfileImage)``;

const ContainerButtonUpdate = styled(ContainerParentButton)`
  background-image: url("images/icon_buttons/button_edit.svg");
`;
const ContainerLottie = styled.div`
  position: absolute;
  right: -2rem;
  top: -2rem;
`;
const ContainerFlexDiv = styled.div`
  display: flex;
`;
