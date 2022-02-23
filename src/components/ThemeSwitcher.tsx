import { useTheme } from "next-themes";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return theme ? (
    <button
      onClick={toggle}
      className="mr-3 p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md transition duration-200"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  ) : null;
};
