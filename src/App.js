import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/backDrop";
import SideBar from "./components/sections/main/sideBar";
import NavBar from "./components/sections/main/navBar";
import MobileFooter from "./components/sections/main/footer";
import SignUpModal from "./components/signUpModal";
import DropDown from "./components/DropDown";
import texts from "./constants/texts";
import Main from "./components/sections/main/main";

function App() {
  return (
      <Router>
        <NavBar/>
        <Main/>
        <DropDown/>
        <SideBar/>
        <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp}/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </Router>
  );
}

export default App;
