import Spinner from "../Spinner";

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-dark-blue-01 flex flex-col justify-center items-center">
      <Spinner size="xl" />
    </div>
  );
};

export default SplashScreen;
