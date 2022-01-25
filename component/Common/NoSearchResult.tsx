interface MessageProps {
  message?: string;
}

const NoSearchResult = ({ message }: MessageProps) => {
  return (
    <div className="no_result">
      <p className="text">{message}</p>
    </div>
  );
};
export default NoSearchResult;
