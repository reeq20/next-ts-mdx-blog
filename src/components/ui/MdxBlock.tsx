import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import React from "react";

const components = {
  img: Image,
};

export default function MdxBlock(props) {
  return (
    <MDXProvider components={components}>
      <div {...props} />
    </MDXProvider>
  );
}
