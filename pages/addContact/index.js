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
        <ContainerTextareaEmail
          name="email"
          placeholder="Enter contact email"
        />
        <ContainerTextareaPhone
          name="phone"
          placeholder="Enter contact phone number"
        />
        <ContainerTextareaWebsite
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
  background-position: left;
  background-size: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
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
const ContainerTextareaEmail = styled(ContainerParentTextarea)`
  background-image: url("icon_email.svg");
`;
const ContainerTextareaPhone = styled(ContainerParentTextarea)`
  background-image: url("icon_phone.svg");
`;
const ContainerTextareaWebsite = styled(ContainerParentTextarea)`
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
`;
