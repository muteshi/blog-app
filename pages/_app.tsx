import { useEffect } from "react";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/globals.css";
import "../styles/responsive.css";

import Layout from "../components/header/layout";
import { SearchContextProvider } from "../context/search-context";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <SearchContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchContextProvider>
  );
}

export default MyApp;
