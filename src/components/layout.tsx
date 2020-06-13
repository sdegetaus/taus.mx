import React from "react";
import Header from "./header";
import Footer from "./footer";

import "normalize.css";
import "../styles/style.scss";

interface Props {
  pageName?: string;
  mainClass?: string;
  children?: JSX.Element[];
}

const Layout = (props: Props) => {
  return (
    <>
      <div id="content" className={props.pageName ?? ""}>
        <Header />
        <main className={`section ${props?.mainClass}`}>{props.children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
