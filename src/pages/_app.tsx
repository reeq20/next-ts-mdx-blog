import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import CodeBlock from "../components/ui/CodeBlock";
import ContentBlock from "../components/ui/ContentBlock";

const mdComponents = {
  h1: (props) => (
    <h1
      className={"py-4 font-sans text-4xl font-bold text-gray-800"}
      {...props}
    />
  ),
  h2: (props) => <h2 className={"p-8"} {...props} />,
  p: (props) => <p className={"py-4 leading-7"} {...props} />,
  code: CodeBlock,
  div: ContentBlock,
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
);
