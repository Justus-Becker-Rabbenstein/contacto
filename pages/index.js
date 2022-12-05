import styled from "styled-components";
import Link from "next/link";

export default function Home({loginName, onSubmitLogin}) {
  return (
    <ContainerDiv>
      <ContainerHeadingOne>Login</ContainerHeadingOne>
      <ContainerForm>
        <ContainerInput
          placeholder={loginName}
          type="text"
          onChange={e => {
            onSubmitLogin(e.currentTarget.value);
          }}
        />
      </ContainerForm>
      <ContainerButton>
        <Link href="/myContacts">Submit</Link>
      </ContainerButton>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
const ContainerHeadingOne = styled.h1`
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  color: #001533;
`;
const ContainerButton = styled.button`
  grid-column: 2;
  grid-row: 3;
  font-size: 2vh;
  height: 50%;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 120px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const ContainerForm = styled.form`
  grid-column: 2;
  grid-row: 2;
`;

const ContainerInput = styled.input`
  width: 100%;
  height: 50%;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 120px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
  border: 1px solid rgba(255, 255, 255, 0.5);

  background-image: url("icon_name.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  padding-left: 40px;
`;
