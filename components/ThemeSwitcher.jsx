import { useTheme } from '../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useRegister } from '@/context/RegisterContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { isCollapsed } = useRegister();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex items-center hover:bg-gray-900 p-2 rounded-lg"
    >
      {theme === 'light' ? (
        <DarkModeIcon className="w-6 h-6 text-gray-600" />
      ) : (
        <LightModeIcon className="w-6 h-6 text-gray-600" />
      )}

      <span
        className={`ml-3 ${isCollapsed ? 'hidden' : 'inline'} text-gray-600`}
      >
        Theme
      </span>
    </button>
  );
};

export default ThemeSwitcher;
