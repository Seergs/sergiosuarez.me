import React from "react";
import GlobalStyles from "../theme/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default Layout;
