import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Furkan K&#305;zmaz Web Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex dark:bg-nosferatu dark:text-nosferatu-100 bg-nosferatu-100 text-nosferatu">
        <div className="grow"></div>
        <div className="grow-0 w-[60rem]">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <div className="grow"></div>
      </div>
    </>
  );
};

export default Layout;
