import React, { PropsWithChildren} from "react";
import { BackgroundLines, Header } from "../components";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="mi-wrapper">
      <BackgroundLines />
      <Header />
      {children}
    </div>
  );
}

export { Layout };
