import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";
import {dbArray} from "../_db/dbArray";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MyApp({Component, pageProps}) {
  /* Start: Logic for Login credential saving */
  const [loginName, setLoginName] = useState("User name");
  const handleSubmitLogin = onSubmitLogin => {
    setLoginName(onSubmitLogin);
  };
  /* End: Logic for Login credential saving */

  /* Start: Logic Navigation */
  const [menuClickStatus, setOnMenuClickStatus] = useState(false);
  function handleNavbarClick(onNavbarClicked) {
    setOnMenuClickStatus(onNavbarClicked);
  }
  /* End: Logic Navigation */

  /* Start: Logic Userarray import */
  const [userArray, setUserArray] = useState(dbArray);
  /* solving lint issue of defined setUserArray, but never used,
  to be removed later */
  console.log(setUserArray);
  /* End: Logic Userarray import */

  return (
    <>
      <GlobalStyles />
      <Header
        menuClickStatus={menuClickStatus}
        onNavbarClick={handleNavbarClick}
      />
      <Component
        {...pageProps}
        loginName={loginName}
        onSubmitLogin={handleSubmitLogin}
        userArray={userArray}
      />
      <Footer />
    </>
  );
}

export default MyApp;
