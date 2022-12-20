import GlobalStyles from "../styles/GlobalStyles";
import {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import useLocalStorage from "../hooks/useLocalStorage";

function MyApp({Component, pageProps}) {
  // USE STATE
  /* Saves the user name that is clicked in pages/myContacts to 
be able to compare it to userarray for displaying a single user */
  const [clickedName, setClickedName] = useState("");
  // bool value to conditionally render navbar burger menu
  const [menuClickStatus, setOnMenuClickStatus] = useState(false);
  // bool value to conditionally render login page help
  const [loginPagerenderHelp, setLoginPagerenderHelp] = useState(false);

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
  // State uplifting: setter for conditonally render help in login page
  function handleHelpClicked(onClickedHelp) {
    setLoginPagerenderHelp(onClickedHelp);
  }

  // LOCAL STORAGE
  // Saves all users
  const [users, setUsers] = useLocalStorage("users", []);
  // saves the user name in the login screen
  const [loginName, setLoginName] = useLocalStorage(
    "loggedInuser",
    "User name"
  );

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
        onClickedAddUser={handleNewUserArrayValue}
        clickedName={clickedName}
        onClickedUserName={handleUserNameClicked}
        onUpdateUser={handleUpdateUser}
        loginPagerenderHelp={loginPagerenderHelp}
        onClickedRenderHelp={handleHelpClicked}
        users={users}
      />
      <Footer />
    </>
  );
}

export default MyApp;
