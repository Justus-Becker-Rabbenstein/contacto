import styled from "styled-components";

const myContacts = ({userArray}) => {
  return (
    <article>
      <header><h2>My Contacts</h2></header>
     {userArray.map((singleUser)=>{
       return (
        <ContainerSection>
          <ContainerImg src={singleUser.image} alt={singleUser.name} height="50vh" width="50vw" />
          <ContainerHeader>
            <h3>{singleUser.name}</h3>
          </ContainerHeader>
        <ContainerName><img src="icon_name.svg" alt="Icon of name" /><p>{singleUser.name}</p></ContainerName>
        <ContainerAddress><img src="icon_address.svg" alt="Icon of address" /><p>{singleUser.address}</p></ContainerAddress>
        <ContainerEmail><img src="icon_email.svg" alt="Icon of email" /><p>{singleUser.email}</p></ContainerEmail>
        <ContainerPhone><img src="icon_phone.svg" alt="Icon of phone" /><p>{singleUser.phone}</p></ContainerPhone>
        <ContainerWebsite><img src="icon_website.svg" alt="Icon of website" /><p>{singleUser.website}</p></ContainerWebsite>
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
width: 50vw;
margin: 10px auto;
background-image: url('isis-franca-4uZXCWaseNE-unsplash.jpg');
background-size: cover;
`
const ContainerImg = styled.img`
grid-column: 3;
grid-row: 1;
position: relative;
right: -10px;
border-radius: 100%;
`
const ContainerHeader = styled.header`
grid-column: 2;
grid-row: 1;
border-radius: 10px;
`
const ContainerName = styled.div`
grid-column: 2;
grid-row: 2;
width: 10%;

`
const ContainerAddress = styled.div`
grid-column: 2;
grid-row: 3;
`
const ContainerEmail = styled.div`
grid-column: 2;
grid-row: 4;
`
const ContainerPhone = styled.div`
grid-column: 2;
grid-row: 5;
`
const ContainerWebsite = styled.div`
grid-column: 2;
grid-row: 6;
margin-bottom: 10px;
`
