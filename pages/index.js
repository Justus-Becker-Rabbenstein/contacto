import styled from "styled-components";
import Link from "next/link";

export default function Home({loginName, setLoginName}) {
  return (
    <ContainerDiv>
      <ContainerHeadingOne>Login</ContainerHeadingOne>
      <ContainerForm>
        <ContainerInput
          placeholder={loginName}
          type="text"
          onChange={e => {
            setLoginName(e.currentTarget.value);
          }}
        />
      </ContainerForm>
      <ContainerButton>
        <Link href="/myContacts/myContacts">Submit</Link>
      </ContainerButton>
    </ContainerDiv>
  );
}

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-columns: (1fr, 1fr, 1fr);
  grid-row: (1fr, 1fr);
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
  font-size: 3vh;
`;

const ContainerForm = styled.form`
  grid-column: 2;
  grid-row: 2;
`;

const ContainerInput = styled.input`
  background-image: url("name-icon.svg");
  background-repeat: no-repeat;
  background-position: 10px;
  padding-left: 40px;
`;
