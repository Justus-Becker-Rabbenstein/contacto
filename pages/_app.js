import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";
import {dbArray} from "../_db/dbArray";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function MyApp({Component, pageProps}) {
  /* 
  Notes:
  localStorage
  https://github.com/pixelass/local-storage-next/blob/main/hooks/useLocalStorage.js
*/

  // this state saves the user name in the login screen
  const [loginName, setLoginName] = useState("User name");
  /* Saves the user name that is clicked in pages/myContacts to 
be able to compare it to userarray for displaying a single user */
  const [clickedName, setClickedName] = useState("");
  // bool value to conditionally render navbar burger menu
  const [menuClickStatus, setOnMenuClickStatus] = useState(false);
  // imports userarray from _/db/dbArray.js into state
  const [userArray, setUserArray] = useState(dbArray);

  // State uplifting: Saves the username from login screen pages/index.js
  const handleSubmitLogin = onSubmitLogin => {
    setLoginName(onSubmitLogin);
  };
  // State uplifting: setter single contact clicked
  const handleUserNameClicked = onClickedUserName => {
    setClickedName(onClickedUserName);
  };
  // State uplifting: setter navbar menu
  function handleNavbarClick(onNavbarClicked) {
    setOnMenuClickStatus(onNavbarClicked);
  }
  // State uplifting: setter userarray new user add
  const handleNewUserArrayValue = onClickedAddUser => {
    setUserArray([...userArray, onClickedAddUser]);
  };
  // State uplifting: setter userarry rewrite user on update
  const handleUpdateUser = updatedUser => {
    setUserArray(
      userArray.map(user => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else {
          return user;
        }
      })
    );
  };

  return (
    <>
      <GlobalStyles />
      <Header
        menuClickStatus={menuClickStatus}
        onNavbarClick={handleNavbarClick}
        onSubmitLogin={handleSubmitLogin}
      />
      <Component
        {...pageProps}
        loginName={loginName}
        onSubmitLogin={handleSubmitLogin}
        userArray={userArray}
        onClickedAddUser={handleNewUserArrayValue}
        clickedName={clickedName}
        onClickedUserName={handleUserNameClicked}
        onUpdateUser={handleUpdateUser}
      />
      <Footer />
    </>
  );
}

export default MyApp;
