import React from "react";
import Header from "./header";
import Footer from "./footer";

import "normalize.css";
import "../styles/style.scss";

interface Props {
  pageName?: string;
  mainClass?: string;
  innerClass?: string;
  children?: JSX.Element[];
}

const Layout = (props: Props) => {
  return (
    <>
      <div id="content" className={props.pageName ?? ""}>
        <Header />
        <main className={`section ${props.mainClass ?? ""}`}>
          <div className={`inner ${props.innerClass ?? ""}`}>
            {props.children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
