import React from "react";
import Header from "./header";
import Footer from "./footer";

// global styles import
import "normalize.css";
import "../styles/style.scss";

import structStyles from "../styles/structure.module.scss";
import layoutStyles from "./layout.module.scss";

const Layout = props => {
  const { pageName, contentClass, mainClass, innerClass, children } = props;
  return (
    <>
      <div
        className={`${layoutStyles.content} ${pageName ?? ""} ${
          contentClass ?? ""
        }`}
      >
        <Header />
        <main className={`${structStyles.section} ${mainClass ?? ""}`}>
          <div className={`${structStyles.inner} ${innerClass ?? ""}`}>
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
