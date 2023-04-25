const Loading: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="spinner"></div>
        <h2 className="text-center font-sans text-white mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
