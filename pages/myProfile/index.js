import React from 'react'
import styled from 'styled-components'

const myProfile = ({loginName, userArray}) => {
    const loginNameObject = {name:`${loginName}`};

    const checkLoggedInUser = userArray.filter((user) => {
    return user.name == loginNameObject.name;
    });

  return (
    <>
    <ContainerDiv>
    {loginName !== "User name" ?
    checkLoggedInUser.map((user)=> {
        return(
        <>
        <ContainerProfileImage
        src={user.image}
        alt={user.name}
        height="50vh"
        width="50vw"
        />
        <ContainerTextareaName disabled value={user.name} />
        <ContainerTextareaAddress  disabled value={user.address} />
        <ContainerTextareaEmail  disabled value={user.email} />
        <ContainerTextareaPhone  disabled value={user.phone} />
        <ContainerTextareaWebsite  disabled value={user.website} />
        <button>Edit</button>
        </>
        )
    })
    : <p>No Data Found.</p>
    }
    </ContainerDiv>
    </>
  )
}

export default myProfile

const ContainerDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
background-image: url("isaac-quesada-rjnT5-cQPPY-unsplash.jpg");
`
const ContainerTextareaName = styled.textarea`
background-image: url("icon_name.svg");
background-repeat: no-repeat;
background-position: left;
background-size: contain;
padding-left: 40px;
`
const ContainerTextareaAddress = styled.textarea`
background-image: url("icon_address.svg");
background-repeat: no-repeat;
background-position: left;
background-size: contain;
padding-left: 40px;
`
const ContainerTextareaEmail = styled.textarea`
background-image: url("icon_email.svg");
background-repeat: no-repeat;
background-position: left;
background-size: contain;
padding-left: 40px;
`
const ContainerTextareaPhone = styled.textarea`
background-image: url("icon_phone.svg");
background-repeat: no-repeat;
background-position: left;
background-size: contain;
padding-left: 40px;
`
const ContainerTextareaWebsite = styled.textarea`
background-image: url("icon_website.svg");
background-repeat: no-repeat;
background-position: left;
background-size: contain;
padding-left: 40px;
`
const ContainerProfileImage = styled.img`
border-radius: 100%;
height: 8em;
width: 8em;
border: 1px solid #001533;
`;