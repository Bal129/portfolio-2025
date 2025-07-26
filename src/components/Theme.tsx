import { createContext, useState, useContext, useEffect } from 'react';

type Theme = "light" | "dark";

interface TypeThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<TypeThemeContext>({
  theme: "light",
  toggleTheme: () => {}
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Create a provider component
function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme); // optional: set on <html>
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// Custom hook to use the context easily
export const useTheme = () => useContext(ThemeContext);