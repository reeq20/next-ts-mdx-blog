import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
export default ({ children, className }) => {
  const language = className.replace(/language-/, "");
  let fileExtension = language.split(".");
  fileExtension.splice(0, 1);
  return (
    <Highlight {...defaultProps} code={children} language={fileExtension}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={"code-block-container"}>
          <span className={"code-block-filename"}>{language}</span>
          <pre className={className} style={{ ...style, padding: "20px" }}>
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
