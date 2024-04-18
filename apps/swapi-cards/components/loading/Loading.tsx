import './loading.css';

const Loading: React.FC = () => {
  return (
    <div className="container">
      <div className="spinner"></div>
      <h2 className="text-center font-sans text-white">Loading...</h2>
    </div>
  );
};

export default Loading;
