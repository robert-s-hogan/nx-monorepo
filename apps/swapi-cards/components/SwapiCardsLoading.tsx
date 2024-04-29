import { Heading } from '@with-nx/generic-ui';

const SwapiCardsLoading = () => {
  return (
    <div className="card rounded-lg relative h-96 overflow-hidden w-full md:w-84 lg:w-80 xl:w-72">
      <style>{`
        @keyframes spinner-spin {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spinner-fade {
          20%, 60% {
            opacity: 0.1;
          }
          40% {
            opacity: 1;
          }
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: #fff; /* Visible part of the spinner */
          border-radius: 50%;
          animation: spinner-spin 1.2s linear infinite, spinner-fade 1.2s linear infinite;
        }
      `}</style>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="spinner"></div>
        <Heading
          level={2}
          className="text-center font-sans text-white mt-8"
          text="Loading..."
        />
      </div>
    </div>
  );
};

export default SwapiCardsLoading;
