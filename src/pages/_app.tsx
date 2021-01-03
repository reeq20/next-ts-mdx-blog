import React from "react";
import { MDXProvider } from "@mdx-js/react";
// import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

const mdComponents = {
  h1: (props) => <h1 className={"p-8"} {...props} />,
  h2: (props) => <h2 className={"p-8"} {...props} />,
};

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
);
