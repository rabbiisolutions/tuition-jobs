import texts from "../constants/texts";

const backDropHandler = e => {
  let modal = document.getElementsByClassName('sign-up modal')[0];
  const sideBar = document.getElementsByClassName('menu')[0];
  modal.classList.add(texts.hidden);
  sideBar.classList.add(texts.hidden);
  e.target.classList.toggle(texts.hidden);
};

export default backDropHandler;
