import * as React from 'react';

export const useDarkMode = (): ['light' | 'dark', () => void] => {
  const [theme, setTheme] = React.useState(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) return localTheme as 'light' | 'dark';
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) return 'dark'; 

    return 'light';
  });

  const toggleTheme = React.useCallback(() => {
    setTheme(prev => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  }, [])

  React.useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme])

  return [theme, toggleTheme]
};

const ThemeToggler = () => {
  const [theme, toggleTheme] = useDarkMode();
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      onClick={() => toggleTheme()}
      className="bg-primary dark:bg-dark-primary text-gray-0 dark:text-dark-gray-0 p-3 rounded-full focus:outline-none"
    >
      {nextTheme} 테마로 변경하기
    </button>
  )
}

export default ThemeToggler;