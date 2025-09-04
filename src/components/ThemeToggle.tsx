import React from 'react';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
  icon: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme, icon }) => {
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-surface shadow-lg flex items-center justify-center hover:bg-surface-raised transition-all duration-300"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;