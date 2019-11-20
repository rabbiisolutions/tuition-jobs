import React from "react";


const MobileFooter = () => {
  return (
      <footer>
          <span className="copyright">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright:&nbsp;</span>
          <span className="company">&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;®&nbsp;</span>
      </footer>
  );
};

export default MobileFooter;
