// Сохраняем тему в localStorage, чтобы не сбрасывалась каждый раз
export const themeModel = {
    getTheme() {
      return localStorage.getItem('theme') || 'light';
    },
    setTheme(theme) {
      localStorage.setItem('theme', theme);
    }
  };