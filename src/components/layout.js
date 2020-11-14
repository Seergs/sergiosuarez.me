import React from "react";
import GlobalStyles from "../theme/GlobalStyles";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
