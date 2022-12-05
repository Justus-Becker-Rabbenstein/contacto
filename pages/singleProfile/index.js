import styled from "styled-components";

const singleProfile = ({userArray, clickedName}) => {
  const clickedNameObject = {name: `${clickedName}`};
  const checkClickedUser = userArray.filter(user => {
    return user.name == clickedNameObject.name;
  });

  return (
    <>
      <h6>Login/My Contacts/Contact Profile</h6>
      {checkClickedUser.map(user => {
        return (
          <ContainerDiv key={`key-section-${user.id}`}>
            <ContainerProfileImage
              src={user.image}
              alt={user.name}
              height="50vh"
              width="50vw"
            />
            <ContainerTextareaName disabled value={user.name} />
            <ContainerTextareaAddress disabled value={user.address} />
            <ContainerTextareaEmail disabled value={user.email} />
            <ContainerTextareaPhone disabled value={user.phone} />
            <ContainerTextareaWebsite disabled value={user.website} />
            <ContainerButtonEdit>Edit</ContainerButtonEdit>
          </ContainerDiv>
        );
      })}
    </>
  );
};

export default singleProfile;

const ContainerDiv = styled.div`
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
const ContainerTextareaName = styled.textarea`
  background-image: url("icon_name.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
`;
const ContainerTextareaAddress = styled.textarea`
  background-image: url("icon_address.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
`;
const ContainerTextareaEmail = styled.textarea`
  background-image: url("icon_email.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
`;
const ContainerTextareaPhone = styled.textarea`
  background-image: url("icon_phone.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
`;
const ContainerTextareaWebsite = styled.textarea`
  background-image: url("icon_website.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 3rem;
  padding-left: 3rem;
  border-radius: 1.5rem;
`;
const ContainerProfileImage = styled.img`
  border-radius: 100%;
  height: 8em;
  width: 8em;
  border: 1px solid #001533;
  margin-bottom: 5%;
  margin-top: 5%;
`;

const ContainerButtonEdit = styled.button`
  width: 33%;
  margin-top: 10%;
  margin-bottom: 10%;
`;
