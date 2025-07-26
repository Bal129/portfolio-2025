import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "./Theme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="c-main-button rounded-start p-2 mx-1"
      style={{maxWidth:"100px", zIndex:10}}
    >
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun } />
    </button>
  );
}

export default ThemeToggle;