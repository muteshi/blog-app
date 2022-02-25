import { useEffect } from "react";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../styles/globals.css";
import "../styles/responsive.css";

import Layout from "../components/header/layout";
import { SearchContextProvider } from "../context/search-context";
import { pageview } from "../lib/gtag";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url, document.title);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

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
