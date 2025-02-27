import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>akds : lost</title>
        <meta name="description" content="Arkadiusz non existing page" />
      </Head>
      <Layout>
        <div className="mi-about-area mi-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="notfound">
                  <div className="notfound-inner text-center">
                    <h1>No such page</h1>
                    <Link href="/" className="mi-button">
                      Get me home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
