import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";
import {dbArray} from "../_db/dbArray";

function MyApp({Component, pageProps}) {
  /* Start: Logic for Login credential saving */
  const [loginName, setLoginName] = useState("Enter user name ... ");
  const handleSubmitLogin = onSubmitLogin => {
    setLoginName(onSubmitLogin);
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
        handleSubmitLogin={handleSubmitLogin}
        userArray={userArray}
      />
    </>
  );
}

export default MyApp;
