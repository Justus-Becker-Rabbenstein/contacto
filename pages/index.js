import styled from "styled-components";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../lotties/login_animation.json";

export default function Home({loginName, onSubmitLogin}) {
  // Config for Lottie SVG animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <ContainerDiv>
      <ContainerHeadingOne>Login</ContainerHeadingOne>
      <Lottie options={defaultOptions} height="100px" width="100px" />
      <ContainerForm>
        <ContainerInput
          placeholder={loginName}
          type="text"
          onChange={e => {
            console.log(loginName);
            onSubmitLogin(e.currentTarget.value);
          }}
        />
        <ContainerLink href="/myContacts">Login</ContainerLink>
      </ContainerForm>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ContainerHeadingOne = styled.h1`
  text-align: center;
  color: #001533;
`;
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const ContainerInput = styled.input`
  width: 15rem;
  height: 2rem;
  margin-bottom: 10%;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 120px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  background-image: url("images/icon_login/icon_user.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 2rem;
  background-position-x: 0.3rem;
  padding-left: 3rem;
  &:focus {
    border: 1px solid #0d4c92;
    background-color: #cff5e7;
  }
  &:hover {
    border: 3px solid #cff5e7;
  }
`;
const ContainerLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 2rem;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 120px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  background-image: url("images/icon_buttons/button_login.svg");
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position-x: 0.5rem;
  background-position-y: 0.2rem;

  :active {
    background-color: #cff5e7;
  }
  &:hover {
    border: 3px solid #cff5e7;
  }
`;
