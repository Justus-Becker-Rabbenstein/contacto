import {useState} from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../lotties/addcontact.json";
import lottieConfig from "../../hooks/lottieConfig";
import {ContainerParentTextarea} from "../../styles/styledTextarea";
import {ContainerParentButton} from "../../styles/styledButton";
import {ContainerParentProfileImage} from "../../styles/styledProfileImage";

const AddContact = ({userArray, onClickedAddUser}) => {
  // url of image of new profile
  const [imgUrl, setImgUrl] = useState("images/icon_addcontact/icon_image.svg");

  function handleImgClicked() {
    let imgUrlVar = window.prompt(
      "Please enter a url for your image:",
      "http://imageurl.com"
    );
    setImgUrl(imgUrlVar);
  }

  // Submit Form
  function handleSubmit(event) {
    event.preventDefault();
    const userArrayLength = userArray.length;
    let toBeAddedObject = {
      id: userArrayLength + 1,
      name: event.target.name.value,
      address: event.target.address.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      website: event.target.website.value,
      image: imgUrl,
    };
    onClickedAddUser(toBeAddedObject);
    event.target.reset();
    alert("New contact saved.");
  }

  return (
    <>
      <h6>Login/Add Contact</h6>
      <ContainerForm type="Submit" onSubmit={handleSubmit}>
        <ContainerLottie>
          <Lottie
            options={lottieConfig(animationData)}
            height={100}
            width={100}
          />
        </ContainerLottie>
        <ContainerProfileImage
          src={imgUrl}
          alt=""
          height="50vh"
          width="50vw"
          name="image"
          onClick={handleImgClicked}
        />
        <ContainerTextareaName name="name" placeholder="Enter name" />
        <ContainerTextareaAddress name="address" placeholder="Enter address" />
        <ContainerInputEmail
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <ContainerInputPhone type="tel" name="phone" placeholder="+49 ..." />
        <ContainerInputaWebsite
          type="url"
          name="website"
          placeholder="https://www. ..."
        />
        <ContainerButtonSubmit type="Submit">Submit</ContainerButtonSubmit>
      </ContainerForm>
    </>
  );
};

export default AddContact;

const ContainerParentInput = styled.input`
  height: 2.5rem;
  background-repeat: no-repeat;
  background-position: left;
  padding-left: 3rem;
  border-radius: 1.5rem;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;
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
const ContainerTextareaName = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_name.svg");
`;
const ContainerTextareaAddress = styled(ContainerParentTextarea)`
  background-image: url("images/icon_contact/icon_address.svg");
`;
const ContainerInputEmail = styled(ContainerParentInput)`
  background-image: url("images/icon_contact/icon_email.svg");
`;
const ContainerInputPhone = styled(ContainerParentInput)`
  background-image: url("images/icon_contact/icon_phone.svg");
`;
const ContainerInputaWebsite = styled(ContainerParentInput)`
  background-image: url("images/icon_contact/icon_website.svg");
`;
const ContainerProfileImage = styled(ContainerParentProfileImage)``;

const ContainerButtonSubmit = styled(ContainerParentButton)`
  background-image: url("images/icon_buttons/button_submit.svg");
`;
const ContainerLottie = styled.div`
  position: absolute;
  right: -3rem;
  top: -3rem;
`;
