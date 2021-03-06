import Head from "next/head";
// import Link from "next/link";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
