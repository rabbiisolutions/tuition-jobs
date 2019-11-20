import overlayActions from "./overlayActions";

const dropDownHandler = e => {
    const target = e.target.parentNode;
    //if (this.state.active) set our services active
      //this.toggleActive(this.state.active);
    //this.toggleActive(target);
    //this.setState({active: target});
    /*if (target.classList[0] === 'menu-sub-item')
      this.setState( {servicesOpen: !this.state.servicesOpen});
    else {
      this.setState( {servicesOpen: false});
      this.servicesToggle(e);
    }*/
    overlayActions(target);
    const navItems = document.getElementsByClassName('nav-item');
    for (let i=0;i<navItems.length;i++) {
      navItems[i].classList.remove('active');
    }
    navItems[1].classList.toggle('active');
};

export default dropDownHandler;
