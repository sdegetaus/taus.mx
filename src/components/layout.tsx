import React from "react";
import Header from "./header";
import Footer from "./footer";

import "normalize.css";
import "../styles/style.scss";

const Layout = ({ children }) => (
  <>
    <div id="content">
      <Header />
      <main className="section">{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
