import {useState} from "react";
import styled from "styled-components";

const AddContact = ({userArray, onClickedAddUser}) => {
  const [imgUrl, setImgUrl] = useState("/icon_image.svg");

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
        <ContainerProfileImage
          src={imgUrl}
          alt=""
          height="50vh"
          width="50vw"
          name="image"
          onClick={handleImgClicked}
        />
        <ContainerTextareaName name="name" placeholder="Enter contact name" />
        <ContainerTextareaAddress
          name="address"
          placeholder="Enter contact address"
        />
        <ContainerInputEmail
          type="email"
          name="email"
          placeholder="Enter contact email"
        />
        <ContainerInputPhone
          type="tel"
          name="phone"
          placeholder="Enter contact phone number"
        />
        <ContainerInputaWebsite
          type="url"
          name="website"
          placeholder="Enter contact website"
        />
        <ContainerButtonSubmit type="Submit">Submit</ContainerButtonSubmit>
      </ContainerForm>
    </>
  );
};

export default AddContact;

const ContainerParentTextarea = styled.textarea`
  background-repeat: no-repeat;
  padding-left: 3rem;
  border-radius: 1.5rem;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;
`;

const ContainerParentInput = styled.input`
  background-repeat: no-repeat;
  background-position: left;
  padding-left: 3rem;
  border-radius: 1.5rem;
  height: 2.5rem;
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
  background-image: url("icon_name.svg");
`;
const ContainerTextareaAddress = styled(ContainerParentTextarea)`
  background-image: url("icon_address.svg");
`;
const ContainerInputEmail = styled(ContainerParentInput)`
  background-image: url("icon_email.svg");
`;
const ContainerInputPhone = styled(ContainerParentInput)`
  background-image: url("icon_phone.svg");
`;
const ContainerInputaWebsite = styled(ContainerParentInput)`
  background-image: url("icon_website.svg");
`;
const ContainerProfileImage = styled.img`
  border-radius: 100%;
  height: 8em;
  width: 8em;
  border: 1px solid #001533;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const ContainerButtonSubmit = styled.button`
  margin-top: 10%;
  margin-bottom: 10%;
  width: 12rem;
  height: 2.5rem;
`;
