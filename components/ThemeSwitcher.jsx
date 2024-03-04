import { useTheme } from '../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <DarkModeIcon className="w-6 h-6 text-black" />
      ) : (
        <LightModeIcon className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
