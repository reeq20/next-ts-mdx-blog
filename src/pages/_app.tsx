import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../../styles/globals.css";
import Image from "next/image";
import CodeBlock from "../components/ui/CodeBlock";
import Link from "next/link";

// const CodeBlock = dynamic(() => import("../components/ui/CodeBlock"));
// import dynamic from "next/dynamic";

const mdComponents = {
  h1: (props) => (
    <h1
      className={"py-4 font-sans text-4xl font-bold text-gray-800"}
      {...props}
    />
  ),
  h2: (props) => <h2 className={"p-8"} {...props} />,
  p: (props) => <p className={"py-4 leading-7"} {...props} />,
  img: Image,
  code: CodeBlock,
  a: Link,
};

const App = ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
);

export default App;
