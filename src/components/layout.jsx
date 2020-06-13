import React from "react";
import Header from "./header";
import Footer from "./footer";

import "normalize.css";
import "../styles/style.scss";

const Layout = props => {
  const { pageName, mainClass, innerClass, children } = props;
  return (
    <>
      <div id="content" className={pageName ?? ""}>
        <Header />
        <main className={`section ${mainClass ?? ""}`}>
          <div className={`inner ${innerClass ?? ""}`}>{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;