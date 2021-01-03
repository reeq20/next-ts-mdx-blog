const ContentBlock = ({ children }) => {
  return (
    <>
      <div
        className={
          "container max-w-7xl mx-auto my-8 border-2 rounded-lg border-gray-200 border-opacity-50 px-8 py-12 bg-white"
        }
      >
        {children}
      </div>
    </>
  );
};
export default ContentBlock;
