import { useTheme } from "next-themes";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button onClick={toggle} className="px-3 py-2 rounded-md">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
