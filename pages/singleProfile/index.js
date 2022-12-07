import styled from "styled-components";

const singleProfile = ({userArray, clickedName}) => {
  // filters single profil
  const clickedNameObject = {name: `${clickedName}`};
  const checkClickedUser = userArray.filter(user => {
    return user.name == clickedNameObject.name;
  });
  //handles click on email send
  function onClickEmail() {
    window.location.href = `mailto:${checkClickedUser[0].email}?subject=Hi from contacto!&body=Type%20your%20message`;
  }

  return (
    <>
      <h6>Login/My Contacts/Contact Profile</h6>
      {checkClickedUser.map(user => {
        return (
          <ContainerSection key={`key-section-${user.id}`}>
            <ContainerProfileImage
              src={user.image}
              alt={user.name}
              height="50vh"
              width="50vw"
            />
            <ContainerDivFlex>
              <ContainerTextareaName disabled value={user.name} />
              <button>Test</button>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaAddress disabled value={user.address} />
              <button>Test</button>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaEmail disabled value={user.email} />
              <ContainerButtonSendEmail
                onClick={onClickEmail}
              ></ContainerButtonSendEmail>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaPhone disabled value={user.phone} />
              <button>Test</button>
            </ContainerDivFlex>
            <ContainerDivFlex>
              <ContainerTextareaWebsite disabled value={user.website} />
              <ContainerButtonVisitWebsite
                onClick={function () {
                  window.open(`${user.website}`, "_blank");
                }}
              ></ContainerButtonVisitWebsite>
            </ContainerDivFlex>
            <ContainerButtonEdit>Edit</ContainerButtonEdit>
          </ContainerSection>
        );
      })}
    </>
  );
};

export default singleProfile;

const ContainerParentTextarea = styled.textarea`
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 2rem;
  padding-left: 3rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;
const ContainerParentButton = styled.button`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
const ContainerSection = styled.section`
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

const ContainerButtonEdit = styled.button`
  width: 33%;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const ContainerDivFlex = styled.div`
  display: flex;
`;
const ContainerButtonVisitWebsite = styled(ContainerParentButton)`
  background-image: url("icon_visit_website.svg");
`;
const ContainerButtonSendEmail = styled(ContainerParentButton)`
  background-image: url("icon_sendemail.svg");
`;
