import { ThemeSwitcher } from "../components";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center dark:text-white text-gray-900 dark:bg-gray-900">
      <div className="text-3xl text-bold">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Home;
