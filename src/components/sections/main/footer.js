import React from "react";


const MobileFooter = () => {
  return (
      <footer>
          <span className="copyright">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright:&nbsp;</span>
          <h1 className="company">&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;®&nbsp;</h1>
      </footer>
  );
};

export default MobileFooter;
