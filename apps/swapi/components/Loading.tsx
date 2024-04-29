import { Heading } from '@with-nx/generic-ui';

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
        <Heading
          level={2}
          className="text-center font-sans text-white mt-4"
          text="Loading..."
        />
      </div>
    </div>
  );
};

export default Loading;
