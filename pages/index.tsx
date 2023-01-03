import Head from "next/head";
import { Inter } from "@next/font/google";
import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Layout, SocialIcons } from "../components";
import database from "../data/database";
import { useTheme } from "next-themes";
import { particlesConfig } from "../data/particlesConfig";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme } = useTheme();
  const { information } = database;

  const particlesInit = async (engine: Engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  };

  return (
    <>
      <Head>
        <title>akds : home</title>
        <meta name="description" content="Arkadiusz home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mi-home-area mi-padding-section">
          <Particles
            init={particlesInit}
            options={
              theme === "light" ? particlesConfig.light : particlesConfig.dark
            }
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hi, I'm{" "}
                    <span className="color-theme">{information.name}</span>
                  </h1>
                  <div className="row justify-content-center">
                    <p className="col-11 col-sm-8 col-md-7">
                      Software Engineer at{" "}
                      <a
                        href="https://noahmediagroup.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Noah Media Group
                      </a>
                    </p>
                  </div>
                  <SocialIcons bordered={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
