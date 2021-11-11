import { ThemeToggleButton } from "../components";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="text-3xl text-bod text-gray-900 dark:text-white">
        <ThemeToggleButton />
        Hello
      </div>
    </div>
  );
}
