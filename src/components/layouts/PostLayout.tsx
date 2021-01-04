import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";

interface HeadProps {
  meta: {
    title: string;
    date: string;
    desc: string;
  };
  children?: any;
}

const Layout = ({ meta, children }: HeadProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <main>
        <div
          className={
            "container max-w-7xl mx-auto my-8 border border-solid border-gray-100 rounded-lg  px-8 py-12 bg-white"
          }
        >
          <h1 className={"py-4 font-sans text-4xl font-bold text-gray-800"}>
            {meta.title}
          </h1>
          <span>
            作成日 : <time dateTime={meta.date}>{meta.date}</time>
          </span>
          <p className={"border-b border-gray-50"}>{meta.desc}</p>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
