import React from "react";
import { Portfolio } from "./Portfolio";
import { IPortfolio } from "../pages/projects";

function PortfoliosView({ portfolios }: { portfolios: IPortfolio[] }) {
  return (
    <div className="row mt-30-reverse">
      {portfolios.map((portfolio) => (
        <div className="col-lg-4 col-md-6 col-12 mt-30" key={portfolio.id}>
          <Portfolio {...portfolio} />
        </div>
      ))}
    </div>
  );
}

export { PortfoliosView };
