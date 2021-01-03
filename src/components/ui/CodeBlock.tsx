import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default ({ children, className }) => {
  const language = className.replace(/language-/, "");
  let fileExtension = language.split(".");
  fileExtension.splice(0, 1);
  return (
    <Highlight {...defaultProps} code={children} language={fileExtension}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={"relative"}>
          <span
            className={
              "absolute inset-0 inline-block z-0 w-32 h-16 text-gray-50"
            }
          >
            {language}
          </span>
          <pre className={`${className} px-6 py-4`} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
