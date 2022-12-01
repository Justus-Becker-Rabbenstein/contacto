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
        <ContainerTextareaName disabled value={user.name} />
        <ContainerTextareaAddress  disabled value={user.address} />
        <ContainerTextareaEmail  disabled value={user.email} />
        <ContainerTextareaPhone  disabled value={user.phone} />
        <ContainerTextareaWebsite  disabled value={user.website} />
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