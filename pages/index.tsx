import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center text-3xl text-bod text-red-500 dark:bg-blue-900 dark:text-white">
      <ThemeToggleButton />
      Hello
    </div>
  );
}
