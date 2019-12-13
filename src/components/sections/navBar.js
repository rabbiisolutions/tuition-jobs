import React from "react";
import Logo from "../logo";
import Icon from "../icon";
import toggle from "../../icons/list.svg"
import Button from "../button";
import texts from "../../constants/texts";
import signUpHandler from "../../events/signUpModal";
import menuToggle from "../../events/menuToggle";
import overlayAction from "../../events/overlayActions";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesShown: false
    };
  }

  servicesToggle(e) {
      overlayAction(document.getElementsByClassName('our-services')[0]);
  };

  menuHandler(e) {
    const target = e.target;
    const navItems = document.getElementsByClassName('nav-item');
    for (let i=0;i<navItems.length;i++) {
      navItems[i].classList.remove('active');
    }
    target.classList.toggle('active');
    this.setState({active: target});
  }

  render() {
    return (
      <div className="nav-bar">
        <Logo className="logo" height={2.5}/>
        <span className="nav">
            <a className="nav-item" href="https://rabbii.co.ke/">
              {texts.menuItems[0]}
            </a>
            <a className="nav-item" href="https://catalogue.rabbii.co.ke/">
              {texts.menuItems[1]}
            </a>
            <a className="nav-item" href="https://about.rabbii.co.ke/">
              {texts.menuItems[2]}
            </a>
            <a className="nav-item"  href="https://faqs.rabbii.co.ke/">
              {texts.menuItems[3]}
            </a>
            <a className="nav-item" href="https://faqs.rabbii.co.ke/#contacts">
              {texts.menuItems[4]}
            </a>
            <a className="nav-item" href="https://trending.rabbii.co.ke/">
              {texts.menuItems[5]}
            </a>
        </span>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
        <Icon src={toggle} className="toggle" height={2.25} width={5} onClick={e => menuToggle(e)}/>
      </div>
    );
  }
}

export default NavBar;
