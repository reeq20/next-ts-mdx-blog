import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ children, className }) => {
  const fileExtension = className
    .replace(/language-/, "")
    .split(".")
    .splice(1, 1);

  return (
    <div className={"relative"}>
      <span
        className={
          "absolute inset-0 text-gray-50 text-xs h-8 w-0.5 inline-block"
        }
      >
        <span className={"inline-flex items-center h-8 px-4 bg-black"}>
          {className.replace(/language-/, "")}
        </span>
      </span>
      <Highlight {...defaultProps} code={children} language={fileExtension}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} px-4 pt-10 pb-4`} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
