import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import useLocalStorage from "../hooks/useLocalStorage";
import Script from "next/script";

function MyApp({Component, pageProps}) {
  // USE STATE
  // bool value to conditionally render navbar burger menu
  const [menuClickStatus, setOnMenuClickStatus] = useState(false);

  // STATE UPLIFTING
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
    setUsers([...users, onClickedAddUser]);
  };
  // State uplifting: setter userarry rewrite user on update
  const handleUpdateUser = updatedUser => {
    setUsers(
      users.map(user => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else {
          return user;
        }
      })
    );
  };
  // State uplifting: delete single user from local storage
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  // LOCAL STORAGE
  // Saves all users
  const [users, setUsers] = useLocalStorage("users", []);
  // saves the user name in the login screen
  const [loginName, setLoginName] = useLocalStorage(
    "loggedInUser",
    "User name"
  );
  /* selected User in 'My Contacts' dashboard to display single profile */
  const [clickedName, setClickedName] = useLocalStorage("selectedContact", "");

  return (
    <>
      <GlobalStyles />
      {/* Writes cloudinary upload script into <head> */}
      <Script src="https://upload-widget.cloudinary.com/global/all.js" />
      <Header
        menuClickStatus={menuClickStatus}
        onNavbarClick={handleNavbarClick}
        onSubmitLogin={handleSubmitLogin}
      />
      <Component
        {...pageProps}
        loginName={loginName}
        onSubmitLogin={handleSubmitLogin}
        onClickedAddUser={handleNewUserArrayValue}
        clickedName={clickedName}
        onClickedUserName={handleUserNameClicked}
        onUpdateUser={handleUpdateUser}
        users={users}
        onClickDeleteUser={deleteUser}
      />
      <Footer />
    </>
  );
}

export default MyApp;
