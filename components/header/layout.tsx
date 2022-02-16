import Head from "next/head";
import { Fragment } from "react";
import Footer from "../ui/footer";
import MainNavigation from "./main-navigation";

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainNavigation />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
