export const themeView = {
    applyTheme(theme) {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
  
      const btn = document.getElementById('themeToggle');
      if (btn) {
        btn.textContent = theme === 'dark' ? 'Сменить тему на светлую' : 'Сменить тему на тёмную';
      }
    }
  };