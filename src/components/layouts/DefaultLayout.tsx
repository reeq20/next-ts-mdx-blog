import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

interface HeadProps {
  meta?: {
    title?: string;
    description?: string;
  };
  children?: any;
}

const Layout = ({
  meta = { title: "HOME", description: "description" },
  children,
}: HeadProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
