const Loading: React.FC = () => {
  return (
    <div className="container h-screen justify-center items-center flex flex-col">
      <div className="spinner"></div>
      <h2 className="text-center font-sans text-white">Loading...</h2>
    </div>
  );
};

export default Loading;
