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
  meta = { title: "Post", description: "description" },
  children,
}: HeadProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <main>
        <div
          className={
            "container max-w-7xl mx-auto my-8 border-2 rounded-lg border-gray-200 border-opacity-50 px-8 py-12 bg-white"
          }
        >
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
