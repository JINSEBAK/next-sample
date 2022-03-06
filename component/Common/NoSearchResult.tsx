import { Fragment } from "react";

interface MessageProps {
  message?: string;
  children?: JSX.Element | JSX.Element[];
}

const NoSearchResult = ({ message, children }: MessageProps) => {
  const lineBreak = (text: string) => {
    const tx = text.split(/\\n/).map((line, index) => {
      return (
        <Fragment key={index}>
          {line}
          {index < text.split(/\\n/).length - 1 && <br />}
        </Fragment>
      );
    });
    return tx;
  };

  return (
    <div className="no_result">
      <p className="text">{lineBreak(message)}</p>
      {children}
    </div>
  );
};
export default NoSearchResult;
