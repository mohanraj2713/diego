"use client"
import { useState, useEffect } from 'react';

export default function UseThemeCheck() {
  const [themeCheck, setThemeCheck] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const applyTheme = (tp_theme: string) => {
    localStorage.setItem('tp_theme_scheme', tp_theme);
    document.documentElement.setAttribute('tp-theme', tp_theme);
    const isDark = tp_theme === 'tp-theme-dark';
    setActive(isDark);

    if (typeof window !== 'undefined') {
      document.querySelectorAll('.themepure-theme-toggle').forEach((el) => {
        if (isDark) {
          el.classList.remove('light-active');
          el.classList.add('dark-active');
        } else {
          el.classList.remove('dark-active');
          el.classList.add('light-active');
        }
      });
      document.querySelectorAll('.themepure-theme-toggle-input').forEach((input: any) => {
        input.checked = isDark;
      });
    }
  };

  const toggleTheme = () => {
    const savedTheme = localStorage.getItem('tp_theme_scheme');
    const currentTheme = savedTheme || (document.documentElement.getAttribute('tp-theme') || 'tp-theme-light');
    const newTheme = currentTheme === 'tp-theme-dark' ? 'tp-theme-light' : 'tp-theme-dark';
    applyTheme(newTheme);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('tp_theme_scheme') || 'tp-theme-light';
      applyTheme(savedTheme);
      setThemeCheck(true);
    }
  }, []);

  return {
    themeCheck,
    toggleTheme,
    active,
  };
}