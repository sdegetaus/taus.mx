import React from "react";
import Header from "./header";
import Footer from "./footer";

// global styles import
import "normalize.css";
import "../styles/style.scss";
import "font-awesome/scss/font-awesome.scss";

import structStyles from "../styles/structure.module.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({
  pageName = "",
  contentClass = "",
  mainClass = "",
  innerClass = "",
  children,
}: LayoutProps) => {
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

interface LayoutProps {
  pageName?: string;
  contentClass?: string;
  mainClass?: string;
  innerClass?: string;
  children: JSX.Element[];
}

export default Layout;
