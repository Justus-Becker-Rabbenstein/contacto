import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";

function MyApp({Component, pageProps}) {
  const [loginName, setLoginName] = useState("Enter user name ... ");

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        loginName={loginName}
        setLoginName={setLoginName}
      />
    </>
  );
}

export default MyApp;
