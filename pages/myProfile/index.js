import styled from "styled-components";
import Lottie from "react-lottie";
import {useFormik} from "formik";
import animationData from "../../lotties/ownprofile.json";

const MyProfile = ({loginName, onSubmitLogin, userArray, onUpdateUser}) => {
  const ownProfileUser = userArray.find(user => user.name === loginName);

  //const [ownProfileUser, setOwnProfileUser] = useState();
  // Lottie config
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Form Submit Logic with Formik library for React (Textareas)
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: ownProfileUser,
    enableReinitialize: true,
    onSubmit: values => {
      onSubmitLogin(values.name);
      onUpdateUser(values);
      //find index and replace array item
      /* const indexOfUser = userArray.findIndex(
        userIndex => userIndex.id == values.id
      );
      userArray.splice(indexOfUser, 1, values);*/
      alert("Own profile successfully updated.");
    },
  });
  // parses loginName String to Object to be able to compare them in the checkLoggedInUser Method
  /* useEffect(() => {
    //first
    const loginNameObject = {name: loginName};
    const checkLoggedInUser = userArray.find(function (user) {
      return user.name == loginNameObject.name;
    });
    let singleObject = {};
    try {
      singleObject = {
        id: checkLoggedInUser.id,
        name: checkLoggedInUser.name,
        address: checkLoggedInUser.address,
        email: checkLoggedInUser.email,
        phone: checkLoggedInUser.phone,
        website: checkLoggedInUser.website,
        image: checkLoggedInUser.image,
      };
    } catch (error) {
      alert("No user logged in. Please login.");
    }
    return () => {
      //second
      setOwnProfileUser(singleObject);
    };
  }, []); */
  // Image Logic Update Logic
  function handleImgClicked() {
    let imgUrlVar = window.prompt(
      "Please enter a url for your image: (new image will be shown on button update)",
      "http://imageurl.com"
    );
    values.image = imgUrlVar;
  }

  return (
    <>
      <button onClick={() => console.log(values)}>test</button>
      <h6>Login/My Profile</h6>
      <ContainerForm onSubmit={handleSubmit}>
        <ContainerLottie>
          <Lottie options={defaultOptions} height="5rem" width="5rem" />
        </ContainerLottie>
        <ContainerProfileImage
          height="50vh"
          width="50vw"
          src={values ? values.image : "Awaiting data ..."}
          alt={values ? values.name : "Awaiting data ..."}
          onClick={handleImgClicked}
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
          <ContainerButtonUpdate type="submit">Update</ContainerButtonUpdate>
        </ContainerFlexDiv>
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
