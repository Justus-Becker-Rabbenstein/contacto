import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";
import {dbArray} from "./_db/dbArray";

function MyApp({Component, pageProps}) {
  /* Start: Logic for Login credential saving */
  const [loginName, setLoginName] = useState("Enter user name ... ");
  const onSubmitLogin = loginNameParam => {
    setLoginName(loginNameParam);
  };
  /* End: Logic for Login credential saving */

  /* Start: Logic Userarray import */
  const [userArray, setUserArray] = useState(dbArray);
  /* solving lint issue of defined setUserArray, but never used,
  to be removed later */
  console.log(setUserArray);
  /* End: Logic Userarray import */

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        loginName={loginName}
        onSubmitLogin={onSubmitLogin}
        userArray={userArray}
      />
    </>
  );
}

export default MyApp;
