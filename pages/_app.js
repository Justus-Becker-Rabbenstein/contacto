import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";

function MyApp({Component, pageProps}) {
  const [loginName, setLoginName] = useState("Enter user name ... ");
  const onSubmitLogin = loginNameParam => {
    setLoginName(loginNameParam);
  };

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        loginName={loginName}
        onSubmitLogin={onSubmitLogin}
      />
    </>
  );
}

export default MyApp;
