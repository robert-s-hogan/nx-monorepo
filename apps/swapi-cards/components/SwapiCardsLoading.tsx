const swapiCardsSpinnerStyles = `
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
`;

const SwapiCardsLoading = () => {
  return (
    <>
      <style>{swapiCardsSpinnerStyles}</style>
      <div className="flex justify-center items-center h-screen">
        <div className="relative mx-auto w-50 h-50 rounded-full border-4 border-gray-200 box-border bg-clip-padding transform-gpu origin-[50%_60%] perspective-200 rotate-x-66 scale-100 animate-[spinner-wiggle_1.2s_infinite] before:absolute before:-m-1 before:box-border before:w-full before:h-full before:rounded-full before:opacity-5 before:border before:border-transparent before:animate-[spinner-spin_1.2s_cubic-bezier(0.6,0.2,0,0.8)_infinite,spinner-fade_1.2s_linear_infinite] before:border-t-white after:absolute after:-m-1 after:box-border after:w-full after:h-full after:rounded-full after:opacity-5 after:border after:border-transparent after:animate-[spinner-spin_1.2s_cubic-bezier(0.6,0.2,0,0.8)_infinite_0.3s,spinner-fade_1.2s_linear_infinite] after:border-t-[#7450fa]"></div>
        <h2 className="text-center font-sans text-white mt-8">Loading...</h2>
      </div>
    </>
  );
};

export default SwapiCardsLoading;
