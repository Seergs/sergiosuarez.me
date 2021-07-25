import React from 'react';
import GlobalStyles from '../theme/GlobalStyles';
import Footer from './footer';
import Header from './header';
import SEO from './seo';

const Layout = ({ children, pageTitle }) => (
  <>
    <SEO title={pageTitle} />
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
