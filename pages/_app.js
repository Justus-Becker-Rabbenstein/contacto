import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";

function MyApp({Component, pageProps}) {
  const [dbArray, setDbArray] = useState([{name: "value"}]);
  const [loginName, setLoginName] = useState("Enter user name ... ");

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        dbArray={dbArray}
        loginName={loginName}
        setLoginName={setLoginName}
      />
    </>
  );
}

export default MyApp;
