import React from "react";
import { BackgroundLines, Header } from "../components";

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: ILayout) {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header />
      {children}
    </div>
  );
}

export { Layout };
