import React from "react";
import { BackgroundLines, Header } from "../components";

interface ILayout {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

function Layout({ children, className }: ILayout) {
  return (
    <div className={`mi-wrapper ${className}`}>
      <BackgroundLines />
      <Header />
      {children}
    </div>
  );
}

export { Layout };
