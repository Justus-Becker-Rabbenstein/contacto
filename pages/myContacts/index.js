import styled from "styled-components";

const myContacts = ({userArray}) => {
  return (
    <article>
      <header><h2>My Contacts</h2></header>
     {userArray.map((singleUser)=>{
       return (
        <ContainerSection>
          <ContainerHeader>
            <h3>{singleUser.name}</h3>
          </ContainerHeader>
          <ContainerInputItemName value={singleUser.name} />
          <ContainerInputItemAddress value={singleUser.address} />
          <ContainerInputItemEmail value={singleUser.email} />
          <ContainerInputItemPhone value={singleUser.phone} />
          <ContainerInputItemWebsite value={singleUser.website} />
        </ContainerSection>
       )
     })}
    </article>
  );
};

export default myContacts;

const ContainerSection = styled.section`
display: grid;
grid-template-columns: 20% 60% 20%;
grid-template-rows: auto;
gap: 3px;
border-radius: 10px;
width: 60%;
margin: 10px auto;
background-image: url('isis-franca-4uZXCWaseNE-unsplash.jpg');
background-size: cover;
`
const ContainerHeader = styled.header`
grid-column: 2;
grid-row: 1;
border-radius: 10px;
`
//Variable for all Inputs
const inputBorder = "1px solid #001533";
const inputBorderRadius = "10px";
const inputBackgroundRepeat = "no-repeat";
const inputBackgroundPosition = "left";
const inputBackgroundSize = "contain";
const inputPaddingLeft = "25px";

const ContainerInputItemName = styled.input`
grid-column: 2;
grid-row: 2;
border: ${inputBorder};
border-radius: ${inputBorderRadius};
background-image: url("icon_name.svg");
background-repeat: ${inputBackgroundRepeat};
background-position: ${inputBackgroundPosition};
background-size: ${inputBackgroundSize};
padding-left: ${inputPaddingLeft};
`
const ContainerInputItemAddress = styled.input`
grid-column: 2;
grid-row: 3;
border: ${inputBorder};
border-radius: ${inputBorderRadius};
background-image: url("icon_address.svg");
background-repeat: ${inputBackgroundRepeat};
background-position: ${inputBackgroundPosition};
background-size: ${inputBackgroundSize};
padding-left: ${inputPaddingLeft};
`
const ContainerInputItemEmail = styled.input`
grid-column: 2;
grid-row: 4;
border: ${inputBorder};
border-radius: ${inputBorderRadius};
background-image: url("icon_email.svg");
background-repeat: ${inputBackgroundRepeat};
background-position: ${inputBackgroundPosition};
background-size: ${inputBackgroundSize};
padding-left: ${inputPaddingLeft};
`
const ContainerInputItemPhone = styled.input`
grid-column: 2;
grid-row: 5;
border: ${inputBorder};
border-radius: ${inputBorderRadius};
background-image: url("icon_phone.svg");
background-repeat: ${inputBackgroundRepeat};
background-position: ${inputBackgroundPosition};
background-size: ${inputBackgroundSize};
padding-left: ${inputPaddingLeft};
`
const ContainerInputItemWebsite = styled.input`
grid-column: 2;
grid-row: 6;
margin-bottom: 10px;
border: ${inputBorder};
border-radius: ${inputBorderRadius};
background-image: url("icon_website.svg");
background-repeat: ${inputBackgroundRepeat};
background-position: ${inputBackgroundPosition};
background-size: ${inputBackgroundSize};
padding-left: ${inputPaddingLeft};
`
