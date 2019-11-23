import React from "react";
import texts from "../../../constants/texts";
import SignUpModal from "../../signUpModal";


const PaymentOptions = () => {
  return (
      <section id="payment-options" className="panel">
        <div className="xtion-title">
          <span className="text">{texts.paymentOptions}</span>
        </div>
        <section className="content">
          <div id="table">
            <div id="titles">
              <span>{texts.tuitionAreas}</span>
              <span>{texts.category}</span>
              <span>{texts.tuitionTypes}</span>
              <span>{texts.numOfStudents}</span>
              <span>{texts.paymentPerClass}</span>
            </div>
            <hr/>
            <div id="body">
              <SignUpModal className="sign-up div" signUpText={texts.signUpLong} status="hidden"/>
            </div>
          </div>
        </section>
        <span className="help">scroll to the right to view more <i className="arrow right"/></span>
      </section>
  )
};

export default PaymentOptions;
