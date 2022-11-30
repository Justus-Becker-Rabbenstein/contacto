import styled from "styled-components";

const Footer = () => {
  return (
    <ContainerFooter><button><a href="#">Back to the top</a></button></ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.footer`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
text-align: center;

background-image: url("isis-franca-4uZXCWaseNE-unsplash.jpg");
background-repeat: no-repeat;
background-size: cover;
`