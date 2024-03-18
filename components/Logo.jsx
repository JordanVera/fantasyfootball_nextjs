import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const Logo = ({ height, width }) => {
  const { theme } = useTheme();

  return (
    <>
      {theme === 'dark' ? (
        <Image
          src={'/images/logo.png'}
          height={height}
          width={width}
          alt="Main Logo"
        />
      ) : (
        <Image
          src={'/images/logo_black.png'}
          height={height}
          width={width}
          alt="Main Logo"
        />
      )}
    </>
  );
};
export default Logo;
