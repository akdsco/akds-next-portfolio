import React, { useState } from "react";
import Head from "next/head";
import {
  SectionTitle,
  Layout,
  Pagination,
  PortfoliosView,
} from "../components";
import database from "../data/database";

export interface IPortfolio {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  data: string;
  largeImageUrl?: string[];
  url: string;
}

export default function Portfolios() {
  const { portfolio } = database;
  const [currentPage, setCurrentPage] = useState(1);
  const portfoliosPerPage = 9;

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolio.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e: React.SyntheticEvent, pageNumber: number) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Head>
        <title>akds : projects</title>
        <meta name="description" content="Arkadiusz portfolio page" />
      </Head>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Projects" />
          {<PortfoliosView portfolios={currentPortfolios} />}
          {portfolio.length > portfoliosPerPage && (
            <Pagination
              className="mt-50"
              itemsPerPage={portfoliosPerPage}
              totalItems={portfolio.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
