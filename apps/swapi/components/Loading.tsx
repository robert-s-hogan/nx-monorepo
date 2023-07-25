interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  return (
    <div
      className={`${className} ? ${className} : "h-[600px] w-full flex justify-center items-center`}
    >
      <div className="flex flex-col items-center">
        <div className="spinner"></div>
        <h2 className="text-center font-sans text-white mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
