import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeSwitcher;
