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

  return theme ? (
    <button onClick={toggle} className="mr-3">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  ) : null;
};
