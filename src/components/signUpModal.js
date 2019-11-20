import React from "react";
import ButtonLink from "./ButtonLink";
import signUpHandler from "../events/signUpModal";

const SignUpModal = (props) => {
  return (
      <div className={props.className}>
        <div className={"close-icon " + props.status} onClick={e => signUpHandler(e)}>&#10006;</div>
        <div className="sign-up-text">{props.signUpText}</div>
        <div id="tutor-btns">
          <ButtonLink link="https://forms.gle/LerPUYib9EJ3yMxr7" className="tutors-btn" value="Non TSC Tutor"/>
          <ButtonLink link="https://forms.gle/ZU8GZrYVPWenL4r19" className="tutors-btn" value="TSC Tutor"/>
          <ButtonLink link="https://forms.gle/CmgUyZCWrnLgsqnC9" className="tutors-btn" value="Skills Tutor"/>
        </div>
        <div className="msg">If you face difficulty in registering call, text or whatsapp on 0772 915 361</div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
