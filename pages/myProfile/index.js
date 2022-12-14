import styled from "styled-components";
import Lottie from "react-lottie";
import {useFormik} from "formik";
import animationData from "../../lotties/ownprofile.json";
import {useState} from "react";
import {useEffect} from "react";

const MyProfile = ({loginName, userArray}) => {
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
  const [ownProfileUser, setOwnProfileUser] = useState();
  useEffect(() => {
    //first
    const loginNameObject = {name: `${loginName}`};
    const checkLoggedInUser = userArray.filter(function (user) {
      return user.name == loginNameObject.name;
    });
    const singleObject = {
      id: checkLoggedInUser[0].id,
      name: checkLoggedInUser[0].name,
      address: checkLoggedInUser[0].address,
      email: checkLoggedInUser[0].email,
      phone: checkLoggedInUser[0].phone,
      website: checkLoggedInUser[0].website,
      image: checkLoggedInUser[0].image,
    };
    return () => {
      //second
      setOwnProfileUser(singleObject);
    };
  }, []);

  // Form Submit Logic with Formik library for React
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: ownProfileUser,
    enableReinitialize: true,
    onSubmit: values => {
      setOwnProfileUser(values);
      //find index and replace array item
      const indexOfUser = userArray.findIndex(
        userIndex => userIndex.id == values.id
      );
      userArray.splice(indexOfUser, 1, values);
    },
  });

  return (
    <>
      <h6>Login/My Profile</h6>
      <ContainerForm onSubmit={handleSubmit}>
        <ContainerLottie>
          <Lottie options={defaultOptions} height="5rem" width="5rem" />
        </ContainerLottie>
        {loginName !== "User name" ? (
          <>
            <ContainerProfileImage
              height="50vh"
              width="50vw"
              src={values ? values.image : "Awaiting data ..."}
              alt={values ? values.name : "Awaiting data ..."}
            />
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
              <ContainerButtonUpdate>Update</ContainerButtonUpdate>
            </ContainerFlexDiv>
          </>
        ) : (
          <p>No Data Found.</p>
        )}
      </ContainerForm>
    </>
  );
};

export default MyProfile;

const ContainerParentTextarea = styled.textarea`
  background-repeat: no-repeat;
  padding-left: 3rem;
  border-radius: 1.5rem;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;
`;
const ContainerParentButton = styled.button`
  width: 14rem;
  height: 2rem;
  margin-top: 10%;
  margin-bottom: 10%;

  background-repeat: no-repeat;
  background-position: left;
  background-size: 1.5rem;
  background-position-x: 0.3rem;
  background-position-y: 0.1rem;
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
