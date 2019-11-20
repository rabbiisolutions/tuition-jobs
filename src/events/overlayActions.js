import texts from "../constants/texts";

const overlayAction = (target) => {
  const backDrop = document.getElementsByClassName('page-mask')[0];
  toggle(target);
  toggle(backDrop);
};

const toggle = (target) => {
  target.classList.toggle(texts.hidden);
};

export default overlayAction;
