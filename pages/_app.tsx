import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ThemeSwitch } from "../components";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ThemeSwitch />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
